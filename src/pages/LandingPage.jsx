import React, { useEffect } from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function LandingPage() {
  // Effect to handle animations on scroll
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 50) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-light">
      {/* Hero Section */}
      <section className="py-5" style={{ 
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center"
      }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0 fade-in" style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s, transform 0.6s" }}>
              <h1 className="display-4 fw-bold mb-4">
                Experience <span className="text-primary">Next-Gen</span> Media Playback
              </h1>
              <p className="lead mb-4" style={{ color: "#e0e0e0" }}>
                Stream your favorite content with crystal clear quality and intuitive controls. Our platform offers seamless playback, personalized recommendations, and powerful organization tools.
              </p>
              <div className="d-flex gap-3">
                <Link to="/home">
                  <Button variant="primary" size="lg" className="px-4 py-2 rounded-pill shadow">
                    Get Started <i className="fas fa-arrow-right ms-2"></i>
                  </Button>
                </Link>
                
              </div>
              
              <div className="mt-5 pt-3 d-flex flex-wrap gap-4">
                <div className="d-flex align-items-center">
                  <div className="bg-primary rounded-circle p-2 me-3">
                    <i className="fas fa-infinity fs-4"></i>
                  </div>
                  <div>
                    <h5 className="mb-0">4K Quality</h5>
                    <small className="text-light">Ultra HD Streaming</small>
                  </div>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="bg-primary rounded-circle p-2 me-3">
                    <i className="fas fa-infinity fs-4"></i>
                  </div>
                  <div>
                    <h5 className="mb-0">Unlimited</h5>
                    <small className="text-light">No Restrictions</small>
                  </div>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="bg-primary rounded-circle p-2 me-3">
                    <i className="fas fa-globe fs-4"></i>
                  </div>
                  <div>
                    <h5 className="mb-0">Global</h5>
                    <small className="text-light">Access Anywhere</small>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={6} className="fade-in" style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s, transform 0.6s", transitionDelay: "0.2s" }}>
              <div className="position-relative">
                <div className="position-absolute top-0 start-0 bg-primary rounded-circle d-none d-md-inline" style={{ width: "150px", height: "150px", opacity: "0.2", transform: "translate(-30%, -30%)" }}></div>
                <div className="position-absolute bottom-0 end-0 bg-primary rounded-circle d-none d-md-inline" style={{ width: "200px", height: "200px", opacity: "0.2", transform: "translate(30%, 30%)" }}></div>
                
                <div className="position-relative rounded-4 overflow-hidden shadow-lg" style={{ transform: "rotateX(5deg) rotateY(-5deg)", transformStyle: "preserve-3d", perspective: "1000px" }}>
                  <div className="ratio ratio-16x9">
                    <img 
                      src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" 
                      alt="Media player interface" 
                      className="img-fluid"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  
                  <div className="position-absolute bottom-0 start-0 w-100 p-3" style={{ 
                    background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" 
                  }}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="mb-0">Now Playing</h5>
                        <p className="mb-0 text-muted">Chill Beats Mix</p>
                      </div>
                      <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-outline-light rounded-circle">
                          <i className="fas fa-step-backward"></i>
                        </button>
                        <button className="btn btn-sm btn-primary rounded-circle">
                          <i className="fas fa-play"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-light rounded-circle">
                          <i className="fas fa-step-forward"></i>
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-2">
                      <div className="progress" style={{ height: "4px", background: "rgba(255,255,255,0.1)" }}>
                        <div 
                          className="progress-bar bg-primary" 
                          role="progressbar" 
                          style={{ width: "35%" }}
                        ></div>
                      </div>
                      <div className="d-flex justify-content-between mt-1 small">
                        <span>1:24</span>
                        <span>4:20</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-6 bg-black mt-3">
        <Container>
          <div className="text-center mb-6 fade-in" style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s, transform 0.6s" }}>
            <h2 className="display-5 fw-bold mb-3">Powerful Features</h2>
            <p className="lead mx-auto text-white" style={{ maxWidth: "700px" }}>
              Everything you need for the ultimate media experience
            </p>
          </div>
          
          <Row className="g-5 justify-content-center mt-3">
            <Col lg={4} md={6} className="fade-in" style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s, transform 0.6s", transitionDelay: "0.1s" }}>
              <Card className="h-100 border-0 rounded-4 overflow-hidden bg-gray-800 shadow-lg feature-card">
                <div className="position-relative">
                  <Card.Img 
                    variant="top" 
                    src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" 
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary" style={{ opacity: 0, transition: "opacity 0.3s" }}></div>
                </div>
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary p-2 rounded me-3">
                      <i className="fas fa-plus fs-4"></i>
                    </div>
                    <Card.Title className="mb-0 fs-4 text-black">Add Media</Card.Title>
                  </div>
                  <Card.Text className="text-black">
                    Easily upload your favorite videos and music. Organize them into playlists and share with friends.
                  </Card.Text>
                  <Link to="/home" className="stretched-link">
                    <Button variant="outline-light" className="mt-3 rounded-pill px-4 btn-primary">
                      Add Media <i className="fas fa-arrow-right ms-2"></i>
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4} md={6} className="fade-in" style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s, transform 0.6s", transitionDelay: "0.2s" }}>
              <Card className="h-100 border-0 rounded-4 overflow-hidden bg-gray-800 shadow-lg feature-card">
                <div className="position-relative">
                  <Card.Img 
                    variant="top" 
                    src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" 
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary" style={{ opacity: 0, transition: "opacity 0.3s" }}></div>
                </div>
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary p-2 rounded me-3">
                      <i className="fas fa-play-circle fs-4"></i>
                    </div>
                    <Card.Title className="mb-0 fs-4 text-black">View Content</Card.Title>
                  </div>
                  <Card.Text className="text-black">
                    Stream your media in stunning quality with adaptive bitrate for the best viewing experience.
                  </Card.Text>
                  <Link to="/home" className="stretched-link">
                    <Button variant="outline-light" className="mt-3 rounded-pill px-4 btn-primary">
                      View Content <i className="fas fa-arrow-right ms-2"></i>
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4} md={6} className="fade-in" style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s, transform 0.6s", transitionDelay: "0.3s" }}>
              <Card className="h-100 border-0 rounded-4 overflow-hidden bg-gray-800 shadow-lg feature-card">
                <div className="position-relative">
                  <Card.Img 
                    variant="top" 
                    src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" 
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary" style={{ opacity: 0, transition: "opacity 0.3s" }}></div>
                </div>
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary p-2 rounded me-3">
                      <i className="fas fa-history fs-4"></i>
                    </div>
                    <Card.Title className="mb-0 fs-4 text-black">Watch History</Card.Title>
                  </div>
                  <Card.Text className="text-black">
                    Track your viewing habits, resume where you left off, and discover new content based on your preferences.
                  </Card.Text>
                  <Link to="/watch" className="stretched-link">
                    <Button variant="outline-light" className="mt-3 rounded-pill px-4 btn-primary">
                      View History <i className="fas fa-arrow-right ms-2"></i>
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Video Showcase */}
      <section className="py-6 mt-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0 fade-in" style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s, transform 0.6s" }}>
              <h2 className="display-5 fw-bold mb-4">Simple & Powerful Playback</h2>
              
              <div className="d-flex mb-4">
                <div className="me-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle mb-2">
                    <i className="fas fa-play fs-3 text-primary"></i>
                  </div>
                </div>
                <div>
                  <h4 className="mb-2">Seamless Streaming</h4>
                  <p className="text-light-70 mb-0">
                    Enjoy buffer-free playback with adaptive streaming technology that adjusts to your connection speed.
                  </p>
                </div>
              </div>
              
              <div className="d-flex mb-4">
                <div className="me-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle mb-2">
                    <i className="fas fa-sliders-h fs-3 text-primary"></i>
                  </div>
                </div>
                <div>
                  <h4 className="mb-2">Custom Controls</h4>
                  <p className="text-light-70 mb-0">
                    Adjust playback speed, quality, and subtitles with our intuitive control panel.
                  </p>
                </div>
              </div>
              
              <div className="d-flex">
                <div className="me-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle mb-2">
                    <i className="fas fa-sync fs-3 text-primary"></i>
                  </div>
                </div>
                <div>
                  <h4 className="mb-2">Cross-Device Sync</h4>
                  <p className="text-light-70 mb-0">
                    Start watching on one device and continue on another without missing a beat.
                  </p>
                </div>
              </div>
              
              <Button variant="outline-light" className="mt-4 rounded-pill px-4 py-2">
                Explore Features <i className="fas fa-arrow-right ms-2"></i>
              </Button>
            </Col>
            
            <Col lg={6} className="fade-in" style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s, transform 0.6s", transitionDelay: "0.2s" }}>
              <div className="position-relative rounded-4 overflow-hidden shadow-lg">
                <div className="ratio ratio-16x9">
                  <iframe 
                    src="https://www.youtube.com/embed/ijBxe70sd8M" 
                    title="Media Player Demo" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="rounded-4"
                  ></iframe>
                </div>
                
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ pointerEvents: "none" }}>
                  <div className="bg-dark bg-opacity-50 rounded-circle d-flex align-items-center justify-content-center" style={{ width: "80px", height: "80px" }}>
                    <i className="fas fa-play text-white fs-3"></i>
                  </div>
                </div>
              </div>
              
             
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default LandingPage;