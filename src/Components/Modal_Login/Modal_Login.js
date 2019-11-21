import React from "react";
import "./Modal_Login.css";

function Modal_Login() {
  return (
    <div>
      <div className="btn-group">
        {/* <button
          type="button"
          className="btn btn-secondary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Klik Untuk Masuk
        </button> */}
        <div
          className="container"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <h6 className="heading6">Klik Untuk Masuk</h6>
        </div>

        <div className="dropdown-menu dropdown-menu-right">
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

          <div className="afs">
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
          <div className="afs2">
            <img
              className="gambar2"
              src="https://res.cloudinary.com/afsori/image/upload/v1574326813/Arkamedia/google_p8df8o.png"
            ></img>
            <div>
              <a href="">
                <p className="masukgoogle">Masuk Dengan Google</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal_Login;
