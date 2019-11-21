import React, { Component } from "react";
import "./Paying.css";

export class Paying extends Component {
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
                    <a class="nav-link " href="#!">
                      Daftar Alamat
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="#">
                      Pembayaran
                    </a>
                  </li>
                </ul>
                <div className="inner-containers">
                  <h3>Kartu Kredit</h3>
                  <p>
                    Data kartu Kredit Anda dijamin keamanannya oleh Visa dan
                    MasterCard
                  </p>
                  <h4>Anda belum menyimpan data Kartu Kredit </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
