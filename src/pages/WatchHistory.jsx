import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { getWatchHistory } from "../services/AllApi";
import { deletehistory } from "../services/AllApi";
import { toast } from "react-toastify";

function WatchHistory() {
  const [history, setHistory] = useState([]);

  const gethistory = async () => {
    const res = await getWatchHistory();
    setHistory(res.data);
  };

  useEffect(() => {
    gethistory();
  }, [history]);

  const deletedata = async (id) => {
    const response = await deletehistory(id);
      if(response.status === 200){
          toast.success(` sucessfully deleted`)
        }else{
          toast.error("Something went Wrong")
        }
  };

  return (
    <>
      <div className="container mt-5 d-flex justify-content-between align-items-center">
        <h6>WATCH HISTORY</h6>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <h6>
            <i class="fa-solid fa-arrow-left text-primary me-1 text-center"></i>
            Back to Home
          </h6>
        </Link>
      </div>
      <hr />
      <div  style={{ overflow: "auto" }}>
      <table
        className="container table mt-3 mb-5 text-center table-dark table-hover table-bordered"
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {history.length > 0 ? (
            history.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.caption}</td>
                <td>{item.embeddedLink}</td>
                <td>{item.time}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      deletedata(item.id);
                    }}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))
          ) : (
               <p style={{textAlign:"center", marginTop:"10px"}}>No History Found</p>
          )}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default WatchHistory;
