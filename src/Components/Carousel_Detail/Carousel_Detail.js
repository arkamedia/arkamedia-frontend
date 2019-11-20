import React, { Component } from "react";
import "./flickity.css";
import "./Carousel_Detail.css";

// const Flickity = require("flickity");
// Or for ES2015 module
import Flickity from "react-flickity-component";

const flickityOptions = {
  initialIndex: 3
};

class Carousel_Detail extends Component {
  render() {
    return (
      <div className="FlashSale">
        <div className="container">
          <div className="Flashsale-header-parent">
            <div className="row">
              <div className="col col-sm-12 col-md-10">
                <h3 className="Flashsale-header">
                  Pembeli yang Melihat Produk Ini, Juga Tertarik dengan
                </h3>
              </div>
              <div className="col col-sm-12 col-md-2 lihat-semua">
                <a href="?#" className="FlashSale-sub-header" alt="Lihat Semua">
                  Lihat Semua
                </a>
              </div>
            </div>
          </div>
          <div
            className="Flashsale-component "
            style={{
              // backgroundSize: "cover",
              width: "100%",
              height: "10rem"
              // marginLeft: "15px"
            }}
          >
            <div className="row">
              {/* <div className="col col-md-3">
                <button className="btn btn-primary button-component">
                  Lihat Semua
                </button>
              </div> */}
              <div className="container">
                <div className="row">
                  <div className="container">
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
                          src="https://cdn.gramedia.com/uploads/items/9786230009402_cover_Yang_Diacak_acak_Seprai_Yang_Berantakan_Hati_front__w200_hauto.jpg"
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <div>
                            <a className="a" href="">
                              <h5 class="card-title">
                                Yang Diacak-Acak Seprai, Yang Berantakan Hati
                              </h5>
                            </a>
                          </div>
                          <p class="card-author"> Faizal Reza </p>

                          <h2 className="price-result">Rp.60.000</h2>
                        </div>
                      </div>
                      <div class="card">
                        <img
                          src="https://cdn.gramedia.com/uploads/items/9789792281712_INCREDIBLE_JOURNEY__w200_hauto.jpg"
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <a className="a" href="">
                            <h5 class="card-title">
                              Classics: Perjalanan Pulang (The Incredible
                              Journey)
                            </h5>
                          </a>
                          <p class="card-author"> Sheila Burnford </p>
                          <h2 className="price-result">Rp.52.000</h2>
                        </div>
                      </div>
                      <div class="card">
                        <img
                          src="https://cdn.gramedia.com/uploads/items/9786020627786_AIR_KATA_KATA_C_1_4__w200_hauto.jpg"
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <a className="a" href="">
                            <h5 class="card-title">Air Kata-kata</h5>
                          </a>
                          <p class="card-author"> Sindhunata </p>

                          <h2 className="price-result">Rp.58.000</h2>
                        </div>
                      </div>
                      <div class="card">
                        <img
                          src="https://cdn.gramedia.com/uploads/items/9786020636238_moon_cov__w200_hauto.jpg"
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <a className="a" href="">
                            <h5 class="card-title">
                              Moon *Ket: Edisi Inggris Bulan
                            </h5>
                          </a>
                          <p class="card-author"> Tere Liye</p>
                          <h2 className="price-result">Rp.150.000</h2>
                        </div>
                      </div>
                      <div class="card">
                        <img
                          src="https://cdn.gramedia.com/uploads/items/9786020634906_miss_echa_cov__w200_hauto.jpg"
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <a className="a" href="">
                            <h5 class="card-title">
                              MetroPop: Miss Echa *Kumcer
                            </h5>
                          </a>
                          <p class="card-author"> Belinda Gunawan </p>
                          <h2 className="price-result">Rp.65.000</h2>
                        </div>
                      </div>
                      <div class="card">
                        <img
                          src="https://cdn.gramedia.com/uploads/items/9786230009426_HR_Marry_in_Scandal__w200_hauto.jpg"
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <a className="a" href="">
                            <h5 class="card-title">Hr: Marry In Scandal</h5>
                          </a>
                          <p class="card-author"> Anne Gracie </p>

                          <h2 className="price-result">Rp.98.000</h2>
                        </div>
                      </div>
                      <div class="card">
                        <img
                          src="https://cdn.gramedia.com/uploads/items/9786024807061_ADDICTED__w200_hauto.jpg"
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <a className="a" href="">
                            <h5 class="card-title">Addicted</h5>
                          </a>
                          <p class="card-author">
                            {" "}
                            Sabrina Syahira Safa Effendi/Siti Alfiah{" "}
                          </p>
                          <h2 className="price-result">Rp.99.000</h2>
                        </div>
                      </div>
                      <div class="card">
                        <img
                          src="https://cdn.gramedia.com/uploads/items/9786020635729_rusunothing_C_1_4-1__w200_hauto.jpg"
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <a className="a" href="">
                            <h5 class="card-title">Rusunothing</h5>
                          </a>
                          <p class="card-author"> Ratri Ninditya</p>
                          <h2 className="price-result">Rp.55.000</h2>
                        </div>
                      </div>
                      <div class="card">
                        <img
                          src="https://cdn.gramedia.com/uploads/items/9786020634357_te_o_toriatte_cov__w200_hauto.jpg"
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <a className="a" href="">
                            <h5 class="card-title">
                              Te O Toriatte (Genggam Cinta)
                            </h5>
                          </a>

                          <p class="card-author"> Akmal Nasery Basral </p>
                          <h2 className="price-result">Rp.86.000</h2>
                        </div>
                      </div>
                      <div class="card">
                        <img
                          src="https://cdn.gramedia.com/uploads/items/9786230009082_cover_More_of_You_front__w200_hauto.jpg"
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <a className="a" href="">
                            <h5 class="card-title">More Of You</h5>
                          </a>

                          <p class="card-author">
                            {" "}
                            Acha Sinaga & Andy Ambarita{" "}
                          </p>
                          <h2 className="price-result">Rp.72.000</h2>
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
export default Carousel_Detail;
