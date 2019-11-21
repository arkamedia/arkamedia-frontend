import React, { Component } from "react";
import Cards from "../../Components/Cards/Cards";
import AddModal from '../../Components/AddModal/AddModal'
import "./AdminDash.css";

class AdminDash extends Component {
  render() {
    return (
      <>
        <div className="pos-f-t">
          <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-info p-4">
              <h5 className="text-white h4">Please add product data carefully.</h5>
              <button
                type="button"
                className="btn btn-light btn-sm"
                style={{ marginRight: "1rem" }}
                data-toggle="modal" 
                data-target="#exampleModalLong">
                Add Product
              </button>
             
             
            </div>
          </div>
          <nav className="navbar navbar-dark bg-dark">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="container">
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2 "
                  type="search"
                  placeholder="Search here...   "
                  aria-label="Search"
                />
              </form>
            </div>
          </nav>
          <AddModal />
          <div className="container" style={{ marginTop: "40px" }}>
            <div className="row">
              <div className="card-deck mx-auto">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default AdminDash;
