import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { uploadVideo } from "../services/AllApi";
import { toast } from "react-toastify";

function Add({setUploadVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setVideo({
      caption: "",
      thumbnailUrl: "",
      embeddedLink: "",
    });
  };

  const handleShow = () => setShow(true);
  const [video, setVideo] = useState({
    caption: "",
    thumbnailUrl: "",
    embeddedLink: "",
  });

  // Submit Button
  const handleUpload = async () => {
    console.log(video);
    if (!video.caption || !video.thumbnailUrl || !video.embeddedLink) {
      toast.warning("Please enter the value");
    } else {
      const result = await uploadVideo(video);
      console.log(result);
      if (result.status === 201) {
        toast.success("uploaded Successfully");
        setUploadVideoStatus(result)
        handleClose();
      } else {
        toast.error("Something Went Wrong");
      }
    }
    // to have empty values
    setVideo({
      caption: "",
      thumbnailUrl: "",
      embeddedLink: "",
    });
  };

  const setEmbeddedLink = (data) => {
    const link = `https://www.youtube.com/embed/${data.slice(-11)}`;
    console.log(link);
    setVideo({ ...video, embeddedLink: `${link}` });
  };
  return (
    <>
      <div className="d-flex align-items-center">
        <h5 className="homepage-header">
          Upload New Video{" "}
          <button className="btn btn-primarty ms-0" onClick={() => handleShow()}>
            {""}
            <i class="fa-solid fa-cloud-arrow-up fs-5 text-primary ms-0"></i>
          </button>
        </h5>
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
            <i class="fa-solid fa-film text-white me-2"></i>Upload Video
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-black">
          <h6 className="text-white mb-4">Please Fill The Form</h6>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Video Title"
                className="text-white"
                onChange={(e) => {
                  setVideo({ ...video, caption: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Video Thumbnail"
                className="text-white"
                onChange={(e) => {
                  setVideo({ ...video, thumbnailUrl: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Video Link"
                className="text-white"
                onChange={(e) => {
                  setEmbeddedLink(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="w-100" onClick={handleUpload}>
            UPLOAD
          </Button>
          <Button variant="secondary" onClick={handleClose} className="w-100">
            CANCEL
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
