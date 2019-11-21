import React, { Component } from "react";
import "./Address.css";

export class Address extends Component {
  render() {
    return (
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              My-account
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col col-md-2 col-sm-12">
            <ul className="side-menu-profile">
              <li>
                <a href="#">Pesanan Saya</a>
              </li>
              <li>
                <a class="active" href="#!">
                  Akun Saya
                </a>
              </li>
              <li>
                <a href="#">Wishlist Saya</a>
              </li>
              <li
                style={{
                  marginTop: "100px"
                }}
              >
                <a href="#">Keluar</a>
              </li>
            </ul>
          </div>
          <div className="col col-md-8 col-sm-12">
            <div className="wrapper-biodata">
              <div className="wrapper-inner">
                <ul class="nav nav-tabs ">
                  <li class="nav-item">
                    <a class="nav-link" href="#!">
                      Biodata
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="#!">
                      Daftar Alamat
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Pembayaran
                    </a>
                  </li>
                </ul>
                <div className="button-add-address">
                  <button className="btn btn-primary">Tambah Alamat</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
