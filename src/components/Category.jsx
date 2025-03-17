import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { addcategory, getAllCategory } from "../services/AllApi";
import { deleteCategory } from "../services/AllApi";

function Category() {
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
        getCategory()
      } else {
        toast.error("something went Wrong");
      }
      setCategoryName("");
    }
  };

  const getCategory = async () => {
    const res = await getAllCategory();
    console.log(res.data);
    setCategories(res.data);
  };

  const deleteCategorybtn = async(id)=>{
    const res = await deleteCategory(id)
    if(res.status === 200){
      toast.success("Category Deleted Successfully")
      getCategory()
    }else{
      toast.error("Something Went Wrong")
    }
  }

  useEffect(() => {
    getCategory();
  }, []);

  console.log(categories);
  return (
    <>
      <div>
        <button className="btn btn-primary mt-3 w-100" onClick={() => handleShow()}>
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
        <div className="border border-secondary rounded mt-3">
          <div className="d-flex justify-content-between align-items-center p-3">
            <h6>{item?.categoryName}</h6>
            <button className="btn btn-danger" onClick={()=>{
              deleteCategorybtn(item.id)
            }}>
              <i className="fa-solid fa-trash text-end"></i>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Category;
