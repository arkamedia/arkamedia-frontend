import React from "react";
import "./ModalUser.css";

const ModalUser = (props) => {
  return (
    <>
      <div>
        <div className="btn-group dropleft">
          <div
            className="imgcontainer"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              src="https://res.cloudinary.com/naandalistcloud/image/upload/v1574346426/Arkamedia/male-ava_v19fxz.svg"
              alt="Avatar"
              className="avatar"
            />
          </div>
          <div className="dropdown-menu">
            <button className="dropdown-item" type="button">
              HALO, {props.name}
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
            <button className="dropdown-item" type="button"
              onClick={(e) => {
                e.preventDefault()
                localStorage.removeItem('usertoken')
                window.location.href = '/'
              }}
            >
              KELUAR
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalUser;
