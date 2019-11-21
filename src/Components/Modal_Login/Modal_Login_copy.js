import React from "react";
import "./Modal_Login.css";

function Modal_Login() {
  return (
    <div>
      {/* Button trigger modal */}
      {/* <a
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Masuk
      </a> */}
      <h6
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Masuk
      </h6>
      {/* <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button> */}
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <form className="formu">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Kata Sandi"
                  />
                </div>
              </form>
              <a href="">
                <p className="lupakatasandi">Lupa Kata Sandi?</p>
              </a>
              <div>
                <button className="masuk" variant="secondary">
                  Masuk
                </button>
              </div>
              <div className="belumdaftar">
                Belum Mendaftar?
                <a href="" className="daftar">
                  Daftar
                </a>
              </div>
              <div>
                <hr className="baris1"></hr>
                <hr className="baris2"></hr>
                <p className="atau">atau</p>
              </div>

              <div className="card">
                <img
                  className="gambar1"
                  src="https://res.cloudinary.com/afsori/image/upload/v1574059472/Arkamedia/facebook_dks2xz.png"
                ></img>
                <div>
                  <a href="">
                    <p className="masukfacebook">Masuk Dengan Facebook</p>
                  </a>
                </div>
              </div>
              <div className="card">
                <img
                  className="gambar1"
                  src="https://res.cloudinary.com/afsori/image/upload/v1574059472/Arkamedia/facebook_dks2xz.png"
                ></img>
                <div>
                  <a href="">
                    <p className="masukfacebook">Masuk Dengan Google</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal_Login;
