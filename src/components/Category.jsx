import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import {
  addcategory,
  getAllCategory,
  getVideoDetailsById,
  setVideoDetailsById,
} from "../services/AllApi";
import { deleteCategory } from "../services/AllApi";
import Card from "react-bootstrap/Card";

function Category() {
  // modal states
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [categoryName, setCategoryName] = useState();
  const [categories, setCategories] = useState([]);

  // To add a Category
  const handleAddCategory = async () => {
    if (!categoryName) {
      toast.warning("Please Fill The form");
    } else {
      const body = {
        categoryName: categoryName,
        allvideos: [],
      };
      const res = await addcategory(body);
      console.log(res);
      handleClose();
      if (res.status === 201) {
        toast.success("Added Successfully");
        getCategory();
      } else {
        toast.error("something went Wrong");
      }
      setCategoryName("");
    }
  };

  // to show all category in UI that is stored in db
  const getCategory = async () => {
    const res = await getAllCategory();
    console.log(res.data);
    setCategories(res.data);
  };

  // To delete category
  const deleteCategorybtn = async (id) => {
    const res = await deleteCategory(id);
    if (res.status === 200) {
      toast.success("Category Deleted Successfully");
      getCategory();
    } else {
      toast.error("Something Went Wrong");
    }
  };

  // for initial loading
  useEffect(() => {
    getCategory();
  }, []);

  // for dragging into category
  const dragOver = (e) => {
    e.preventDefault();
    console.log("inside drag Over");
  };

  const videoDropped = async (e, id) => {
    console.log(`Dropped inside category with ${id}`);
    const vId = e.dataTransfer.getData("videoId");
    console.log(`${vId} dropped in ${id}`);
    const res = await getVideoDetailsById(vId);
    const { data } = res;

    let selectedCategory = categories?.find((item) => item.id == id);
    selectedCategory.allvideos.push(data);
    console.log(selectedCategory);
    const result = await setVideoDetailsById(id, selectedCategory);
    console.log(result);
    getCategory();
  };

  return (
    <>
      <div>
        <button
          className="btn btn-primary mt-3 mb-2 w-100"
          onClick={() => handleShow()}
        >
          Add New Category
        </button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        data-bs-theme="dark"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-white">
            {" "}
            <i class="fa-solid fa-list text-white me-3"></i>Add Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-black">
          <h6 className="text-white mb-4">Please Fill The Form</h6>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                value={categoryName}
                placeholder="Enter Category"
                className="text-white"
                onChange={(e) => {
                  setCategoryName(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="w-100"
            onClick={handleAddCategory}
          >
            ADD
          </Button>
          <Button variant="secondary" onClick={handleClose} className="w-100">
            CANCEL
          </Button>
        </Modal.Footer>
      </Modal>
      {categories?.map((item) => (
        <div
          className="border border-secondary rounded mt-3 mb-2"
          droppable
          onDragOver={(e) => dragOver(e)}
          onDrop={(e) => videoDropped(e, item.id)}
        >
          <div className="d-flex justify-content-between align-items-center p-3">
            <h6>{item?.categoryName}</h6>
            <button
              className="btn btn-danger"
              onClick={() => {
                deleteCategorybtn(item.id);
              }}
            >
              <i className="fa-solid fa-trash text-end"></i>
            </button>
          </div>
          <hr />

          <div className="d-flex flex-row justify-content-between align-items-center p-4 flex-wrap gap-3">
            {item.allvideos.map((data) => (
              <Card style={{ width: "8rem" }} className="bg-black">
                <Card.Img
                  variant="top"
                  width="150px"
                  height="125px"
                  src={data?.thumbnailUrl}
                />
                <Card.Body>
                  <div className="d-flex justify-content-evenly align-items-center">
                    <Card.Title
                      className="text-white fs-6"
                    >
                      {data?.caption?.length >9 ? data.caption.slice(0, 9) + ".." : data.caption }
                    </Card.Title>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Category;
