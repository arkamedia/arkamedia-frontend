import React, { Component } from "react";
import "./BookPopular.css";

class BookPopular extends Component {
  render() {
    return (
      <div className="book" style={{marginTop:'40px', marginRight: '-1px'
    }}>
        <div className="container">
          <div className="Book-header-parent">
            <div className="row">
              <div className="col col-sm-12 col-md-10">
                <p className="header">Buku - Buku Populer</p>
              </div>
              <div className="col col-sm-12 col-md-2 lihat-semua">
                <a href="!#" className="book-sub-header" alt="Lihat Semua">
                  Lihat Semua
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col col-md-2 col-sm-12 ">
                <section className="image-side">
                  <img
                    src="https://cdn.gramedia.com/uploads/category-list/Product_List_Banner-07__w320_hauto.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                </section>
              </div>
              <div className="col col-md-9 col-sm-12 detail">
                <div className="row">
                  <div className="col col-md-2 col-sm-12 card-popular ">
                    <div class="card">
                      <img
                        src="https://cdn.gramedia.com/uploads/items/9786023948680_buku-aktivitas-si-kecil_dunia-anak__w414_hauto.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">
                          Buku Aktivitas Si Kecil : Dunia Anak
                        </h5>
                        <p class="card-author">Rebecca Gilpin</p>
                        <p class="card-price">
                          Rp.105.000
                          <span class="badge badge-primary">20%</span>
                        </p>
                        <h2 className="price-result">Rp.84.000</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-2 col-sm-12 card-popular ">
                    <div class="card">
                      <img
                        src="https://cdn.gramedia.com/uploads/items/9786230005879_Cov_Conan_96__w414_hauto.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">Detektif Conan 96</h5>
                        <p class="card-author"> Aoyama Gosho</p>
                        <p class="card-price">
                          Rp.105.000
                          <span class="badge badge-primary">20%</span>
                        </p>
                        <h2 className="price-result">Rp.84.000</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-2 col-sm-12 card-popular ">
                    <div class="card">
                      <img
                        src="https://cdn.gramedia.com/uploads/items/9786024554958_Aku-Ingin-Tahu-Tentang_Dunia-Kita__w414_hauto.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">
                          Aku Ingin Tahu Tentang: Dunia Kita
                        </h5>
                        <p class="card-author"> Usborne</p>
                        <p class="card-price">
                          Rp.105.000
                          <span class="badge badge-primary">20%</span>
                        </p>
                        <h2 className="price-result">Rp.84.000</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-2 col-sm-12 card-popular">
                    <div class="card">
                      <img
                        src="https://cdn.gramedia.com/uploads/items/9786023947041_-ensiklopedia-pertamaku_alam__w414_hauto.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">
                          Ensiklopedia Pertamaku : Alam
                        </h5>
                        <p class="card-author">Fleurus</p>
                        <p class="card-price">
                          Rp.105.000
                          <span class="badge badge-primary">20%</span>
                        </p>
                        <h2 className="price-result">Rp.84.000</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-2 col-sm-12 card-popular">
                    <div class="card">
                      <img
                        src="https://cdn.gramedia.com/uploads/items/9786230006661_Cakramanggilingan__w414_hauto.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">CakraManggilan</h5>
                        <p class="card-author">Wawan Susetya</p>
                        <p class="card-price">
                          Rp.105.000
                          <span class="badge badge-primary">20%</span>
                        </p>
                        <h2 className="price-result">Rp.84.000</h2>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookPopular;