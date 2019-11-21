import React from "react";
import swal from 'sweetalert';
import EditModal from "../EditModal/EditModal";

const Cards = () => {
  return (
    <>
      <div className="col-3 my-card">
        <div className="card">
          <img
            src="https://cdn.gramedia.com/uploads/images/1/43192/image_highres/ID_EE2018MTH07EE__w414_hauto.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body mx-auto">
            <h5 className="card-title">Eleven eleven</h5>
            <div className="row">
              <div className="col-6">
                <p className="card-text">
                  <small
                    className="text-muted"
                    data-toggle="modal"
                    data-target="#EditModalLong"
                  >
                    {" "}
                    <a href="#!">Update</a>{" "}
                  </small>
                </p>
              </div>
              <div className="col-6">
                <p className="card-text">
                  <small className="text-muted">
                    <a href="#!" onClick={ ()=>{
                      swal({
                        title: "Are you sure?",
                        text: "Once deleted, you will not be able to recover this imaginary file!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      })
                      .then((willDelete) => {
                        if (willDelete) {
                          swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                          });
                        } else {
                          swal("Your file is safe!");
                        }
                      });
                    }}>Delete</a>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditModal />
    </>
  );
};

export default Cards;
