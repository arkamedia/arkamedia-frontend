import React from "react";
import { OverlayTrigger, ButtonToolbar, Tooltip } from "react-bootstrap";
import "./Detail.css";

class Detail extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div>
            <nav aria-label="breadcrumb" className="BREADCRUMB">
              <ol className="breadcrumb p-3 mb-2 bg-white text-dark">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Buku</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Sejarah</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Novel</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  All The Light We Cannot See
                </li>
              </ol>
            </nav>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <img
                  style={{
                    width: "200px",
                    marginBottom: "10px",
                    marginLeft: "7px"
                  }}
                  src="https://cdn.gramedia.com/uploads/items/9786230008146_All_The_Light_We_Cannot_See__w414_hauto.jpg"
                  className="gambar1"
                />
                <p style={{ marginLeft: "6px" }}>
                  Bagikan Ke :
                  <img
                    href=""
                    src="https://image.flaticon.com/icons/svg/174/174848.svg"
                    style={{
                      width: "20px",
                      marginBottom: "10px",
                      marginLeft: "5px"
                    }}
                  />
                  <img
                    href=""
                    src="https://image.flaticon.com/icons/svg/1409/1409937.svg"
                    style={{
                      width: "20px",
                      marginBottom: "10px",
                      marginLeft: "5px"
                    }}
                  />
                  <img
                    href=""
                    src="https://image.flaticon.com/icons/svg/2260/2260913.svg"
                    style={{
                      width: "20px",
                      marginBottom: "10px",
                      marginLeft: "5px"
                    }}
                  />
                </p>
              </div>
              <div className="col-5" style={{ marginRight: "120px" }}>
                <h2 style={{ color: "#281e5a" }}>
                  All The Light We Cannot See
                </h2>
                <h5 style={{ color: "#281e5a" }}>Anthony Doerr</h5>
              </div>
              <div className="col">
                <div
                  className=" border-primary mb-3"
                  style={{ width: "15rem" }}
                >
                  <div className="card-header">
                    <h5 style={{ display: "inline-grid", color: "#281e5a" }}>
                      Soft Cover
                    </h5>
                    <br />
                    {/* <ButtonToolbar className="inline-block">
                      {["left"].map(placement => (
                        <OverlayTrigger
                          key={placement}
                          placement={placement}
                          overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                              Buku cetak dengan sampul fleksibel tipis. Mudah
                              untuk dibawa bepergian.
                            </Tooltip>
                          }
                        >
                          <span className="roundedCircle">i</span>
                        </OverlayTrigger>
                      ))}
                    </ButtonToolbar> */}
                    <h6
                      className="img-insurance"
                      // className="tooltip"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Buku cetak dengan sampul fleksibel tipis. Mudah untuk
                      dibawa bepergian."
                    >
                      i
                    </h6>
                    {/* <span className="tooltip">i</span> */}
                    <p className="harga">Rp. 125.000</p>
                  </div>
                </div>
                <button className="belisekarang" variant="primary">
                  BELI SEKARANG
                </button>
                <br />
                <br />
                <button className="tambahwishlist" variant="secondary">
                  TAMBAH WISHLIST
                </button>
                <hr
                  style={{
                    marginRight: "px"
                  }}
                />
                <p
                  // style={{ marginLeft: "185px", marginTop: "-27px" }}
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Biaya ganti rugi untuk barang rusak atau hilang akibat
                      kesalahan pada proses pengiriman. Selengkapnya..."
                >
                  <span className="img-insurance">
                    Tersedia Asuransi Pengiriman
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div>
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    className="nav-item nav-link active"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Deskripsi
                  </a>
                  <a
                    className="nav-item nav-link"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="#nav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Detail
                  </a>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  Marie-Laure tinggal di Paris di dekat Museum Sejarah Nasional,
                  tempat ayahnya bekerja. Ketika Marie-Laure berusia dua belas
                  tahun, tentara Nazi mengambil alih Paris, memaksa ayah dan
                  anak itu melarikan diri ke Saint-Malo, ke rumah adik-kakek
                  Marie-Laure, Etienne. Bersama dengan kaburnya ke Saint-Malo,
                  mereka membawa satu benda yang amat berharga, yang harus
                  dijaga dari para Nazi. Di sebuah kota tambang di Jerman,
                  Werner Pfenning, seorang yatim piatu, yang tumbuh besar
                  bersama adik perempuannya. Mereka senang mendengarkan radio,
                  yang membawakan berita dan cerita dari tempat-tempat yang
                  belum pernah mereka dengar. Werner akhirnya menjadi ahli dalam
                  bidang bangunan dan perbaikan instrumen lalu didaftarkan untuk
                  melacak pemberontakan. Dengan menghubungkan kehidupan
                  Marie-Laure dan Werner, Doerr menjelaskan bahwa bagaimanapun,
                  manusia akan berusaha untuk bersikap baik kepada sesama.
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                  style={{
                    fontFamily: "Karla,sans-serif!important",
                    justifyContent: " space-between"
                  }}
                >
                  <p>
                    Jumlah Halaman &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; 576.0 }
                  </p>
                  <p>
                    Tanggal Terbit &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;4 Nov 2019
                  </p>
                  <p>
                    ISBN &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp;9786230008146
                  </p>
                  <p>
                    Bahasa &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; Indonesia
                  </p>
                  <p>
                    Penerbit &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp;Elex Media Komputindo
                  </p>
                  <p>
                    Berat &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; 0.45 kg
                  </p>
                  <p>
                    Lebar &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; 13.5 cm
                  </p>
                  <p>
                    Panjang &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp;20.0 cm
                  </p>
                </div>
              </div>
            </div>
            <br></br>
            <hr />
          </div>
        </div>
        <div
          style={{
            color: "#281e5a",
            background: "#f0f0f0"
          }}
        ></div>
      </div>
    );
  }
}

export default Detail;
