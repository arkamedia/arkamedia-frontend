import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div
        className="row footer-row"
        style={{
          height: "8rem",
          color: "#281e5a",
          background: "#f0f0f0"
        }}
      >
        <div className="container">
          <div className="row footer-row">
            <div className="col-8">
              <h5 className="container" style={{ color: "#281e5a" }}>
                <br />
                Jadilah yang pertama tahu berita terbaru event dan penawaran
                spesial kami
              </h5>
              <form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                  <label htmlFor="inputPassword2" className="sr-only">
                    Masukkan Alamat Email Anda
                  </label>
                  <input
                    style={{ width: "37rem" }}
                    type="password"
                    className="form-control"
                    id="inputPassword2"
                    placeholder="Masukkan Alamat Email Anda"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mb-2"
                  style={{
                    width: "6rem",
                    backgroundColor: "#281e5a",
                    borderRadius: "3px",
                    border: "none",
                    color: "#fff",
                    fontFamily: "Karla, sans-serif"
                  }}
                >
                  DAFTAR
                </button>
              </form>
            </div>
            <div className="col-4" style={{ marginTop: "24px" }}>
              <p style={{ marginLeft: "9rem" }}>Ikuti Kami</p>
              <a href="#!">
                <img
                  style={{
                    width: "30px",
                    marginLeft: "9rem"
                  }}
                  src="https://image.flaticon.com/icons/svg/1409/1409946.svg"
                  alt="your network is loading"
                ></img>
              </a>
              <a href="#!">
                {" "}
                <img
                  style={{ width: "33px", paddingLeft: "5px" }}
                  src="https://image.flaticon.com/icons/svg/124/124021.svg"
                  alt="file is loading"
                ></img>
              </a>
              <a href="#!">
                <img
                  src="https://image.flaticon.com/icons/svg/174/174848.svg"
                  style={{ width: "36px", paddingLeft: "6px" }}
                  alt="file is loading"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row footer-row"
        style={{
          height: "16rem",
          color: "#281e5a",
          background: "#f0f0f0",
          marginTop: "3px"
        }}
      >
        <div className="container">
          <div className="row footer-row">
            <div className="col ">
              <h6 className="colom1">BELANJA</h6>
              <div>
                <a href="#!" className="paragraf1">
                  Berbelanja
                </a>
              </div>
              <div>
                <a href="#!" className="paragraf">
                  Pembayaran
                </a>
              </div>
              <div>
                <a href="#!" className="paragraf">
                  Pengiriman
                </a>
              </div>
            </div>

            <div className="col ">
              <h6 className="colom2">TENTANG GRAMEDIA</h6>
              <div>
                <a href="#!" className="paragraf2">
                  Tentang Kami
                </a>
              </div>
              <div>
                <a href="#!" className="parag">
                  Toko Kami
                </a>
              </div>
              <div>
                <a href="#!" className="parag">
                  Kerjasama
                </a>
              </div>
            </div>
            <div className="col ">
              <h6 className="colom3">LAINNYA</h6>
              <div>
                <a href="#!" className="paragraf2">
                  Syarat & Ketentuan
                </a>
              </div>
              <div>
                <a href="#!" className="parag">
                  Kebijakan & Privasi
                </a>
              </div>
              <div>
                <a href="#!" className="parag">
                  Bantuan
                </a>
              </div>
              <div>
                <a href="#!" className="parag">
                  Hubungi Kami
                </a>
              </div>
            </div>
            <div className="col xs-4">
              <h6 className="colom4">PEMBAYARAN</h6>
              <img
                className="gambar1"
                src="https://res.cloudinary.com/afsori/image/upload/v1574187171/Arkamedia/Mandiri_logo_w9jtgx.png"
                alt="file is loading"
             ></img>
              <img
                className="gambar1"
                src="https://res.cloudinary.com/afsori/image/upload/v1574187171/Arkamedia/PermataBank_vridau.png"
                alt="file is loading"
              ></img>
              <img
                className="gambar1"
                src="https://res.cloudinary.com/afsori/image/upload/v1574213276/Arkamedia/1280px-BNI_logo.svg_mpcvfz.png"
                alt="file is loading"
              ></img>
              <img
                className="gambar1"
                src="https://res.cloudinary.com/afsori/image/upload/v1574187169/Arkamedia/BRI_q9jm6o.png"
                alt="file is loading"
              ></img>
              <img
                className="gambar2"
                src="https://res.cloudinary.com/afsori/image/upload/v1574187169/Arkamedia/bca_dy5ges.png"
                alt="file is loading"
              ></img>
              <img
                className="gambar2"
                src="https://res.cloudinary.com/afsori/image/upload/v1574213276/Arkamedia/Logo_GoPay_Vector_CDR_dan_PNG_bw6pme.png"
                alt="file is loading"
              ></img>
              <h6 className="colom6">PENGIRIMAN</h6>
              <img
                className="gambar3"
                src="https://res.cloudinary.com/afsori/image/upload/v1574213276/Arkamedia/kgx-v_csvq95.png"
                alt="file is loading"
             ></img>
              <img
                className="gambar3"
                src="https://res.cloudinary.com/afsori/image/upload/v1574187171/Arkamedia/pickupstore_fp6tz6.png"
                alt="file is loading"
              ></img>
              <img
                className="gambar3"
                src="https://res.cloudinary.com/afsori/image/upload/v1574187170/Arkamedia/grab_lgyet8.jpg"
                alt="file is loading"
              ></img>
            </div>
            <div className="col ">
              <h6 className="colom5">DAPATKAN APPS KAMI</h6>
              <a href="#!">
                <img
                  className="app1"
                  src="https://res.cloudinary.com/afsori/image/upload/v1574187170/Arkamedia/play_yah6hh.png"
                  alt="file is loading"
               ></img>
              </a>
              <a href="#!">
                <img
                  className="app2"
                  src="https://res.cloudinary.com/afsori/image/upload/v1574187170/Arkamedia/app_store_x0blqd.png"
                  alt="file is loading"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={"row footer-row"}
        style={{
          height: "2rem",
          background: "#281e5a",
          marginTop: "3px"
        }}
      >
        <p id="copyright">&copy; 2019 Gramedia Digital Nusantara</p>
      </div>
    </div>
  );
}

export default Footer;
