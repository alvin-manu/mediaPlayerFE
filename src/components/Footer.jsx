import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className=" d-flex justify-content-center align-content-center mt-3 p-3 bg-dark">
        <div className="d-md-flex align-content-center justify-content-center gap-5 ">
          <div className="overview" style={{ maxWidth: "350px" }}>
            <h4>
              <i class="fa-solid fa-video me-3 text-primary "></i>
              Media Player
            </h4>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
              veritatis debitis sed placeat modi animi. Architecto inventore
              eligendi vero nisi in mollitia, hic distinctio vel placeat laborum
              non tempore possimus? Incidunt cum harum eveniet aspernatur a
              numquam quidem nihil quisquam praesentium facilis quod.
            </p>
          </div>

          <div className="guides">
            <h4>Guides</h4>
            React
            <br />
            Bootstrap
            <br />
            Font Awesome
          </div>

          <div className="links">
            <h4>Links</h4>
            <Link to="/" style={{textDecoration:"none", color:"#0d6efd"}}>Landing Page</Link>
            <br />
            <Link to="/home" style={{textDecoration:"none", color:"#0d6efd"}}>Home</Link>
            <br />
            <Link to ="/watch" style={{textDecoration:"none", color:"#0d6efd"}}>Watch History</Link>
          </div>

          <div className="contact">
            <h4>Contact Us</h4>
            <div className="d-flex">
              <input type="text" placeholder="Enter Your Email" className="form-control"/>
              <button className="btn btn-primary ms-2">Subscribe</button>
            </div>
            <div className="icons d-flex ps-1 pe-5 pt-4 justify-content-between">
            <i class="fa-brands fa-github text-primary fs-3"></i>
            <i class="fa-brands fa-instagram text-primary fs-3"></i>
            <i class="fa-brands fa-whatsapp text-primary fs-3"></i>
            <i class="fa-brands fa-linkedin text-primary fs-3"></i>

            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark pb-2">
        <p className="text-center">Copyright &copy; 2025 MEDIA PLAYER</p>
      </div> 
    </>
  );
}

export default Footer;
