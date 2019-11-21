import React from "react";
import "./Modal_user.css";

function Modal_user() {
  return (
    <div>
      <div className="btn-group dropleft">
        <div
          className="imgcontainer"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            src="https://res.cloudinary.com/afsori/image/upload/v1574332354/Arkamedia/avatar-icon-transparent-8_rwngkw.png"
            alt="Avatar"
            className="avatar"
          />
        </div>
        <div className="dropdown-menu">
          <button className="dropdown-item" type="button">
            HALO, M
          </button>
          <button className="dropdown-item" type="button">
            PESANAN SAYA
          </button>
          <button className="dropdown-item" type="button">
            AKUN SAYA
          </button>
          <button className="dropdown-item" type="button">
            WISHLIST SAYA
          </button>
          <button className="dropdown-item" type="button">
            KELUAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal_user;
