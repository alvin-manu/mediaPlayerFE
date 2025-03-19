import React, { useState } from "react";
import Add from "../components/Add";
import { Link } from "react-router-dom";
import View from "../components/View";
import Category from "../components/Category";

function Home() {
  const [uploadVideoStatus, setUploadVideoStatus] = useState({});
  return (
    <>
      {/* First Session */}
      <div className="container d-flex align-items-center justify-content-between mt-5">
        <Add setUploadVideoStatus={setUploadVideoStatus} />
        <Link style={{ textDecoration: "none" }} to="/watch">
          <h5 className="homepage-header">
            <span className="text-primary fw-bold">WATCH HISTORY </span>{" "}
            <i class="fa-solid fa-clock fa-duotone"></i>
          </h5>
        </Link>
      </div>
      <hr />
      {/* second session */}
      <div className="container-fluid">
        <div className="row mt-3 p-2">
          <div className="col-md-9 text-center">
            <View uploadVideoStatus={uploadVideoStatus} />
          </div>
          <div className="col-md-3 text-center rounded bg-dark mt-3 mt-md-0">
            <Category />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Home;
