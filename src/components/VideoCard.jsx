import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { deleteVideo } from "../services/AllApi";
import { toast } from "react-toastify";
import { addToHistory } from "../services/AllApi";

function VideoCard({ displayVideo, setDeleteVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {

    setShow(true);

    const {caption , embeddedLink} = displayVideo

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const hour = today.getHours();
    const minutes = String(today.getMinutes()).padStart(2,'0');
    const time = day+"/"+month+"/"+year+" "+hour+":"+minutes
    console.log(time)

    const history = {
      caption : caption,
      embeddedLink : embeddedLink,
      time : time
    }
    const response = await addToHistory(history);
  };

  const removeVideo = async (id)=>{
    const response = await deleteVideo(id)
    console.log(" delete response")
    console.log(response)
    if(response.status === 200){
      toast.success(`${displayVideo.caption} sucessfully deleted`)
      setDeleteVideoStatus(response)
    }else{
      toast.error("Something went Wrong")
    }
  }
  return (
    <>
      <div className="container-fluid d-flex flex-row flex-wrap gap-4 mt-4 justify-content-center">
        <Card style={{ width: "18rem" }} className="bg-dark">
          <Card.Img
            variant="top"
            width="300px"
            height="250px"
            src={displayVideo?.thumbnailUrl}
            onClick={() => handleShow()}
          />
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
              <Card.Title className="text-white" onClick={() => handleShow()}>
                {displayVideo.caption.slice(0, 14)}
              </Card.Title>
              <Button variant="danger" onClick={()=> removeVideo(displayVideo.id)}>
                <i className="fa-solid fa-trash"></i>
              </Button>
            </div>
          </Card.Body>
        </Card>
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
            {displayVideo.caption}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-black">
          <iframe
            width="100%"
            height="300px"
            src={displayVideo.embeddedLink}
            title=""
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default VideoCard;
