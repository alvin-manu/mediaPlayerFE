import React from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      {/* first Section */}
      <Container className="mt-5 mb-5 d-flex align-content-center justify-content-evenly flex-wrap">
        <Row className="row-cols-1 row-cols-md-2">
          <Col>
            <h3>
              Welcome To <span className="text-primary">Media Player</span>
            </h3>
            <p style={{ textAlign: "justify" }}>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              dolorum quisquam maiores nisi quos voluptatem! Sapiente laborum
              ipsum exercitationem quos deleniti, debitis placeat, dignissimos
              voluptate error maxime, dolorem modi hic. Nihil, eius dolor ipsa
              ea ut hic neque ipsam excepturi atque laboriosam, dignissimos modi
              aperiam sequi ex culpa voluptatibus error at veniam magnam.
            </p>
            <Link to="/home">
              <button className="btn btn-primary mt-3">
                {" "}
                Get Started <i class="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </Col>
          <Col className="d-flex align-content-center justify-content-center mt-4 mt-md-0">
            <img
              src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif"
              alt=""
              width={"350px"}
            />
          </Col>
        </Row>
      </Container>

      {/* second Section */}

      <div className="container">
        <h3>FEATURES</h3>
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-evenly mt-5 mb-5">
          <Card style={{ width: "18rem"}}>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif"
            />
            <Card.Body>
              <Card.Title>Add Video</Card.Title>
              <Card.Text className="text-black">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to="/home">
                <Button variant="primary">Add Video</Button>
              </Link>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif"
            />
            <Card.Body>
              <Card.Title>View Video</Card.Title>
              <Card.Text className="text-black">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to="/home">
                <Button variant="primary">View Video</Button>
              </Link>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif"
            />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text className="text-black">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to="/watch">
                <Button variant="primary">Watch History</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Third Section */}
      <div className="container border border-white rounded pt-4 pb-4">
        <Row className="row-cols-1 row-cols-md-2">
          <Col>
            <h3 className="mb-4">SIMPLE AND POWERFUL</h3>
            <p>
              <span className="fs-5">PLAY EVERYTHING : </span> Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Omnis asperiores
              voluptatibus explicabo quae ipsum. Perspiciatis omnis, ut debitis
              enim beatae dolorem solutai.
            </p>
            <p>
              <span className="fs-5">PLAY EVERYTHING : </span> Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Omnis asperiores
              voluptatibus explicabo quae ipsum. Perspiciatis omnis, ut debitis
              enim beatae dolorem solutai.
            </p>
            <p>
              <span className="fs-5">PLAY EVERYTHING : </span> Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Omnis asperiores
              voluptatibus explicabo quae ipsum. Perspiciatis omnis, ut debitis
              enim beatae dolorem solutai.
            </p>
          </Col>
          <Col className="d-flex align-items-center justify-content-center mt-4 mt-md-0">
          <iframe width="100%" height="300" src="https://www.youtube.com/embed/ijBxe70sd8M" title="Achacho - Video Song | Aranmanai 4  | Sundar.C | Tamannaah | Raashii Khanna | Hiphop Tamizha" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default LandingPage;
