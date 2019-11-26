import React from "react";
import "./Detail.css";
import Navbar from '../../Components/Navbar/Navbar';
import {getProductByID} from '../../Config/product'
import Footer from '../../Components/Footer/Footer'

import moment from 'moment'

class Detail extends React.Component {

  constructor(){
    super()
    this.state = {
      book: []
    }
  }

  componentDidMount(){
    const {product_id} = this.props.location.state
    console.log(product_id)
    getProductByID(product_id).then(res=> {
      this.setState({
        book: res[0]
      })
    })
  }

  render() {

    const {book} = this.state

    return (
      <div>
        <Navbar />
        <div className="container" style={{marginTop: '120px'}}> 

          <div className="container">
            <div className="row">
              <div className="col">
                <img
                  style={{
                    width: "200px",
                    marginBottom: "10px",
                    marginLeft: "7px"
                  }}
                  src={book.imgurl}
                  className="gambar1-detail"
                  alt="file is loading"
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
                    alt="file is loading"
                  />
                  <img
                    href=""
                    src="https://image.flaticon.com/icons/svg/1409/1409937.svg"
                    style={{
                      width: "20px",
                      marginBottom: "10px",
                      marginLeft: "5px"
                    }}
                    alt="file is loading"
                  />
                  <img
                    href=""
                    src="https://image.flaticon.com/icons/svg/2260/2260913.svg"
                    style={{
                      width: "20px",
                      marginBottom: "10px",
                      marginLeft: "5px"
                    }}
                    alt="file is loading"
                  />
                </p>
              </div>
              <div className="col-5" style={{ marginRight: "120px", marginTop: '40px' }}>
                <h2 style={{ color: "#281e5a" }}>
                  {book.product_name}
                </h2>
                  <h5 style={{ color: "#281e5a" }}>{book.author ? book.author : '-'}</h5>
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
                  <p className="harga">Rp. {book.price}</p>
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
                  {book.description}
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
                    &nbsp; &nbsp; &nbsp; {book.pages}
                  </p>
                  <p>
                    Tanggal Terbit &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; { book.publish_date }
                  </p>
                  <p>
                    ISBN &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; {book.ISBN}
                  </p>
                  <p>
                    Bahasa &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; Indonesia
                  </p>
                  <p>
                    Penerbit &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp;{book.publisher}
                  </p>
                  <p>
                    Berat &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; {book.weight} kg
                  </p>
                  <p>
                    Lebar &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; {book.width} cm
                  </p>
                  <p>
                    Panjang &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; {book.height} cm
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
        <Footer />
      </div>
    );
  }
}

export default Detail;
