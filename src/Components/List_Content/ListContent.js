import React, { Component } from "react";
import "./ListContent.css";

export class ListContent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col-md-12 produk-list">
            <h3>Produk (999+)</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col col-sm-12 col-md-3">
            <ul className="side-menu-list-content">
              <li>
                <p>Filter</p>
              </li>
              <li>
                <p>Kategori</p>
              </li>
              <p>
                <a
                  class="btn btn-basic button-collapse-category dropdown-toggle"
                  data-toggle="collapse"
                  href="#multiCollapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1"
                >
                  Buku
                </a>
              </p>
              <div class="collapse multi-collapse" id="multiCollapseExample1">
                <div class="card-list card-body-list">
                  <ul>
                    <li>Comic</li>
                    <li>Magazine</li>
                    <li>Ebook</li>
                    <li>Novel</li>
                  </ul>
                </div>
              </div>
              <div className="price-range">
                <h4>Harga</h4>
                <form>
                  <div class="form-group">
                    <label for="minimum">Minimum</label>
                    <input
                      type="text"
                      class="form-control"
                      id="minimum"
                      aria-describedby="emailHelp"
                      placeholder="0"
                    />
                  </div>
                  <div class="form-group">
                    <label for="maximum">Maximum</label>
                    <input
                      type="text"
                      class="form-control"
                      id="maximum"
                      placeholder="500.000"
                    />
                  </div>
                </form>
              </div>
              <div className="price-range">
                <h4>Filter Berdasarkan Stok</h4>
                <form action="">
                  <input type="radio" name="gender" value="male" /> Semua
                  <br />
                  <input type="radio" name="gender" value="female" /> Tersedia
                  <br />
                </form>
              </div>
              <button className="btn btn-basic button-list-content">
                Reset
              </button>
            </ul>
          </div>
          <div className="col col-md-9 col-sm-12">
            <div class="dropdown">
              <button
                class="btn btn-basic dropdown-toggle button-pop"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Terpopuler
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item dropdown-item-pop" href="#">
                  Terbaru
                </a>
                <a class="dropdown-item" href="#">
                  Terpopuler
                </a>
                <a class="dropdown-item" href="#">
                  Harga Terendah
                </a>
                <a class="dropdown-item" href="#">
                  Harga Tertinggi
                </a>
              </div>
            </div>
            <div className="inform-list">
              <small>
                Menampilkan <b>1-6</b> dari <b>546</b> Produk
              </small>
              <p> &#8249; 1 &#47; 546 &#8250;</p>
            </div>
            <div className="container">
              <div className="row">
                <div className="col col-md-3 col-sm-12">
                  <div class="card-list-main">
                    <img
                      src="https://cdn.gramedia.com/uploads/items/9786023948680_buku-aktivitas-si-kecil_dunia-anak__w414_hauto.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body-list-main">
                      <h5 class="card-title-list-main">
                        Buku Aktivitas Si Kecil : Dunia Anak
                      </h5>
                      <p class="card-author-list-main">Rebecca Gilpin</p>
                      <p class="card-price-list-main">
                        Rp.105.000
                        <span class="badge badge-primary-list-main">20%</span>
                      </p>
                      <h2 className="price-result-list-main">Rp.84.000</h2>
                    </div>
                  </div>
                </div>

                <div className="col col-md-3 col-sm-12">
                  <div class="card-list-main">
                    <img
                      src="https://cdn.gramedia.com/uploads/items/9786230006661_Cakramanggilingan__w414_hauto.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body-list-main">
                      <h5 class="card-title-list-main">CakraManggilan</h5>
                      <p class="card-author-list-main">Wawan Susetya</p>
                      <p class="card-price-list-main">
                        Rp.105.000
                        <span class="badge badge-primary-list-main">20%</span>
                      </p>
                      <h2 className="price-result-list-main">Rp.84.000</h2>
                    </div>
                  </div>
                </div>

                <div className="col col-md-3 col-sm-12">
                  <div class="card-list-main">
                    <img
                      src="https://cdn.gramedia.com/uploads/items/9786024554958_Aku-Ingin-Tahu-Tentang_Dunia-Kita__w414_hauto.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body-list-main">
                      <h5 class="card-title-list-main">
                        Aku Ingin Tahu Tentang: Dunia Kita
                      </h5>
                      <p class="card-author-list-main">Usborne</p>
                      <p class="card-price-list-main">
                        Rp.105.000
                        <span class="badge badge-primary-list-main">20%</span>
                      </p>
                      <h2 className="price-result-list-main">Rp.84.000</h2>
                    </div>
                  </div>
                </div>
                <div className="col col-md-3 col-sm-12">
                  <div class="card-list-main">
                    <img
                      src="https://cdn.gramedia.com/uploads/items/9786023947041_-ensiklopedia-pertamaku_alam__w414_hauto.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body-list-main">
                      <h5 class="card-title-list-main">
                        Ensiklopedia Pertamaku : Alam
                      </h5>
                      <p class="card-author-list-main">Fleurus</p>
                      <p class="card-price-list-main">
                        Rp.105.000
                        <span class="badge badge-primary-list-main">20%</span>
                      </p>
                      <h2 className="price-result-list-main">Rp.84.000</h2>
                    </div>
                  </div>
                </div>
                <div className="col col-md-3 col-sm-12">
                  <div class="card-list-main">
                    <img
                      src="https://cdn.gramedia.com/uploads/items/9786230006661_Cakramanggilingan__w414_hauto.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body-list-main">
                      <h5 class="card-title-list-main">CakraManggilan</h5>
                      <p class="card-author-list-main">Wawan Susetya</p>
                      <p class="card-price-list-main">
                        Rp.105.000
                        <span class="badge badge-primary-list-main">20%</span>
                      </p>
                      <h2 className="price-result-list-main">Rp.84.000</h2>
                    </div>
                  </div>
                </div>
                <div className="col col-md-3 col-sm-12">
                  <div class="card-list-main">
                    <img
                      src="https://cdn.gramedia.com/uploads/items/9786024557362_PP-RI-NO.16-T__w414_hauto.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body-list-main">
                      <h5 class="card-title-list-main">
                        PP NO 16 Tahun 2018 Tentang Pengadaan Barang & Jasa
                      </h5>
                      <p class="card-author-list-main">Tim Redaksi BIP</p>
                      <p class="card-price-list-main">
                        Rp.105.000
                        <span class="badge badge-primary-list-main">20%</span>
                      </p>
                      <h2 className="price-result-list-main">Rp.84.000</h2>
                    </div>
                  </div>
                </div>
                <div className="col col-md-3 col-sm-12"></div>
                <div className="col col-md-3 col-sm-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
