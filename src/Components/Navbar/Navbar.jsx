import React from "react";
import ModalLogin from '../ModalLogin/ModalLogin'
import ModalUser from '../ModalUser/ModalUser'
import './Navbar.css'
import $ from 'jquery';
import jwt_decode from 'jwt-decode'

class Navbar extends React.Component {


  constructor() {
    super()
    this.state = {
      user: []
    }
  }

  componentDidMount() {
    $('.dropdown-menu').click(function (event) {
      event.stopPropagation();
    });

    if(localStorage.usertoken){

      const token = localStorage.usertoken
      const decoded = jwt_decode(token)
  
      this.setState({user: decoded.response})
    }

  }



  render() {

    const { user } = this.state

    console.log(user)

    return (
      <div>
        <nav
          className="navbar fixed-top navbar-light "
          style={{
            height: "24px",
            backgroundColor: "#201848",
            position: "fixed",
            top: "0",
            width: "100%",
            zIndex: "100",
            fontFamily: "Karla",
            fontSize: "14px",
            // boxShadow: "0px 10px 20px -10px rgba(0,0,0,0.75)",
          }}
        >
          <a
            className="icon ion-help-circled"
            style={{
              color: "#fff",
              marginLeft: "70rem",
              marginTop: "-3px"
            }}
            href="https://help.gramedia.com/hc/en-us"
          >
            Bantuan
          </a>
        </nav>

        <nav
          className="navbar navbar-expand-lg "
          style={{
            position: "fixed",
            top: "24px",
            right: "0",
            left: "0",
            background: "#281e5a",
            color: "#fff",
            zIndex: "100",
            boxShadow: "0 0 0 24 rgba(0,0,0,.12)",
            height: "65px",
            fontFamily: "Karla"
          }}
        >
          <img
            style={{ width: "10rem", marginLeft: "9rem" }}
            href="!#"
            src="https://res.cloudinary.com/naandalistcloud/image/upload/v1573977387/Arkamedia/logo_cn2jnc.png"
            alt="logo brand still loading"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a
                  style={{
                    width: "10rem",
                    marginLeft: "8rem",
                    marginRight: "-5rem",
                    fontSize: "18px",
                    fontFamily: "Karla,sans-serif",
                    color: "#fff"
                  }}
                  className="nav-link dropdown-toggle"
                  href="!#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Kategori
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  style={{
                    fontSize: "15px",
                    fontFamily: "Karla,sans-serif",
                    color: "#fff",
                  }}
                >
                  <a className="dropdown-item" href="!#">
                    BUKU
                  </a>
                  <a className="dropdown-item" href="!#">
                    STATIONERY, SEKOLAH DAN KANTOR
                  </a>
                  <a className="dropdown-item" href="!#">
                    EBOOK
                  </a>
                  <a className="dropdown-item" href="!#">
                    MAJALAH
                  </a>
                  <a className="dropdown-item" href="!#">
                    FASHION DAN AKSESORIS
                  </a>
                  <a className="dropdown-item" href="!#">
                    TEKNOLOGI
                  </a>
                  <a className="dropdown-item" href="!#">
                    MAINAN DAN HOBI
                  </a>

                  <a className="dropdown-item" href="!#">
                    MAKANAN DAN MINUMAN
                  </a>
                  <a className="dropdown-item" href="!#">
                    OLAHRAGA
                  </a>
                  <a className="dropdown-item" href="!#">
                    PERALATAN KESEHATAN
                  </a>
                  <a className="dropdown-item" href="!#">
                    PERLENGKAPAN BAYI
                  </a>
                  <a className="dropdown-item" href="!#">
                    TISU
                  </a>
                  <a className="dropdown-item" href="!#">
                    TALI SEPATU
                  </a>
                </div>
              </li>
            </ul>

            <form
              className="form-inline my-2 my-lg-0"
              style={{ marginRight: "2rem", width: "31rem", marginLeft: "1rem" }}
            >
              <input
                style={{
                  width: "45rem",
                  fontSize: "18px",
                  fontFamily: "Karla,sans-serif"
                }}
                className="form-control mr-sm-2"
                type="search"
                placeholder="Cari Produk, Judul Buku, Penulis"
                aria-label="Search"
              />
            </form>

            {user.length === 0 ?
              (<ModalLogin />) :
              (<ModalUser name={user.name} />)}

            {/* <ModalLogin /> */}
            {/* <ModalUser /> */}

            <p><span className="badge badge-pill badge-danger my-badge">7</span></p>
            <img
              style={{
                width: "39px",
                marginRight: "10rem",
                marginLeft: "2rem"
              }}
              src="https://res.cloudinary.com/naandalistcloud/image/upload/v1574346889/Arkamedia/shopping-bag_lsspqa.svg"
              alt="shoping bag still load"
            />


          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
