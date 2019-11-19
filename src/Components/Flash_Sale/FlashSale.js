import React, { Component } from "react";
import "./flickity.css";
import "./FlashSale.css";

// Or for ES2015 module
import Flickity from "react-flickity-component";

const flickityOptions = {
  initialIndex: 1
};

class FlashSale extends Component {
  render() {
    return (
      <div className="FlashSale">
        <div className="container">
          <div className="Flashsale-header-parent">
            <div className="row">
              <div className="col col-sm-12 col-md-10">
                <h3 className="Flashsale-header">Flash Sale</h3>
              </div>
              <div className="col col-sm-12 col-md-2 lihat-semua">
                <a href="!#" className="FlashSale-sub-header" alt="Lihat Semua">
                  Lihat Semua
                </a>
              </div>
            </div>
          </div>
          <div
            className="Flashsale-component"
            style={{
              backgroundImage:
                "url(https://www.gramedia.com/flash-sale-banner-ii.e7c92cd4c6c16feb6fde.png)",
              backgroundSize: "cover",
              width: "94%",
              height: "454px"
              // marginLeft: "15px"
            }}
          >
            <div className="row">
              <div className="col col-md-3">
                <button className="btn btn-primary button-component">
                  Lihat Semua
                </button>
              </div>
              <div className="col col-md-9">
                <div className="row">
                  <div className="col-md-10">
                    <Flickity
                      className={"carousel"} // default ''
                      elementType={"div"} // default 'div'
                      options={flickityOptions} // takes flickity options {}
                      disableImagesLoaded={false} // default false
                      reloadOnUpdate // default false
                      static // default false
                    >
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
                      <div class="card">
                        <img
                          src="https://cdn.gramedia.com/uploads/items/PBKCurhatStaf-1__w414_hauto.png"
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <h5 class="card-title">
                            #Curhatstaf- Seni Mendengarkan Bagi Para Pemimpin
                          </h5>
                          <p class="card-author">Josef Bataona</p>
                          <p class="card-price">
                            Rp.105.000
                            <span class="badge badge-primary">20%</span>
                          </p>
                          <h2 className="price-result">Rp.84.000</h2>
                        </div>
                      </div>
                      <div class="card">
                        <img
                          src="https://cdn.gramedia.com/uploads/items/9786020629650__w414_hauto.JPG"
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <h5 class="card-title">
                            Branding Destinasi & Promosi Pariwisata
                          </h5>
                          <p class="card-author">Rimsky K. Judisseno</p>
                          <p class="card-price">
                            Rp.105.000
                            <span class="badge badge-primary">20%</span>
                          </p>
                          <h2 className="price-result">Rp.84.000</h2>
                        </div>
                      </div>
                      <div class="card">
                        <img
                          src="https://cdn.gramedia.com/uploads/items/Dunia_Dalam_Genggaman_Bung_Karno_2__w414_hauto.jpg"
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <h5 class="card-title">
                            Dunia Dalam Genggaman Bung Karno 2
                          </h5>
                          <p class="card-author"> Sigit Aris Prasetyo</p>
                          <p class="card-price">
                            Rp.105.000
                            <span class="badge badge-primary">20%</span>
                          </p>
                          <h2 className="price-result">Rp.84.000</h2>
                        </div>
                      </div>
                      <div class="card">
                        <img
                          src="https://cdn.gramedia.com/uploads/items/sustainable-01-324x432_rCkm3Gz__w414_hauto.png"
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <h5 class="card-title">Sustainable Tourism</h5>
                          <p class="card-author"> I Gede Ardika</p>
                          <p class="card-price">
                            Rp.105.000
                            <span class="badge badge-primary">20%</span>
                          </p>
                          <h2 className="price-result">Rp.84.000</h2>
                        </div>
                      </div>
                      <div class="card">
                        <img
                          src="https://cdn.gramedia.com/uploads/items/9786237409007__w414_hauto.jpg"
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <h5 class="card-title">
                            Begini Rasul Berbisnis Strategi, Inspirasi, Dan
                            Rahasia Kesuksesan Bisnis Nabi
                          </h5>
                          <p class="card-author"> Ha Halim Ibnu Hafidz</p>
                          <p class="card-price">
                            Rp.105.000
                            <span class="badge badge-primary">20%</span>
                          </p>
                          <h2 className="price-result">Rp.84.000</h2>
                        </div>
                      </div>
                      <div class="card">
                        <img
                          src="https://cdn.gramedia.com/uploads/items/9786232410046_retropeksi__w414_hauto.jpg"
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <h5 class="card-title">
                            Retrospeksi: Langkah Kehidupan Perjalanan Karier
                            Seorang Diplomat Indonesia
                          </h5>
                          <p class="card-author"> Soemadi Dm Brotodiningrat</p>
                          <p class="card-price">
                            Rp.105.000
                            <span class="badge badge-primary">20%</span>
                          </p>
                          <h2 className="price-result">Rp.84.000</h2>
                        </div>
                      </div>
                      <div class="card">
                        <img
                          src="https://cdn.gramedia.com/uploads/items/9786020622613_Mahyuddin_Per__w414_hauto.jpg"
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <h5 class="card-title">Perjuangan Di Atas Mimpi</h5>
                          <p class="card-author"> Alberthiene Endah</p>
                          <p class="card-price">
                            Rp.105.000
                            <span class="badge badge-primary">20%</span>
                          </p>
                          <h2 className="price-result">Rp.84.000</h2>
                        </div>
                      </div>
                    </Flickity>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-3">
                    <div class="card">
                      <img
                        src="https://cdn.gramedia.com/uploads/items/PBKCurhatStaf-1__w414_hauto.png"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">
                          #Curhatstaf- Seni Mendengarkan Bagi Para Pemimpin
                        </h5>
                        <p class="card-author">Josef Bataona</p>
                        <p class="card-price">
                          Rp.105.000
                          <span class="badge badge-primary">20%</span>
                        </p>
                        <h2 className="price-result">Rp.84.000</h2>
                      </div>
                    </div>
                  </div> */}
            {/* <div className="col-md-3">
                    <div class="card">
                      <img
                        src="https://cdn.gramedia.com/uploads/items/Dunia_Dalam_Genggaman_Bung_Karno_2__w414_hauto.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">
                          Dunia Dalam Genggaman Bung Karno 2
                        </h5>
                        <p class="card-author">Sigit Aris Prasetyo</p>
                        <p class="card-price">
                          Rp.105.000
                          <span class="badge badge-primary">20%</span>
                        </p>
                        <h2 className="price-result">Rp.84.000</h2>
                      </div>
                    </div>
                  </div> */}
          </div>
        </div>
      </div>
    );
  }
}
export default FlashSale;
