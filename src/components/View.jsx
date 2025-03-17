import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import VideoCard from "./VideoCard";
import { getAllVideo } from "../services/AllApi";

function View({uploadVideoStatus}) {
  const [allVideo, setAllVideo] = useState([]);
  const [deleteVideoStatus,setDeleteVideoStatus]= useState({});

  const getVideos = async () => {
    const res = await getAllVideo();
    console.log(res.data);
    setAllVideo(res.data);
  };

  useEffect(() => {
    getVideos();
  }, [uploadVideoStatus, deleteVideoStatus]);

  return (
    <>
      <h4>Videos</h4> 
      <Row>
        {allVideo?.map((item) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <VideoCard displayVideo ={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default View;
