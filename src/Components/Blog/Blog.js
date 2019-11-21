import React, { Component } from "react";
import "./Blog.css";

export class Blog extends Component {
  render() {
    return (
      <div className="container">
        <div className="Flashsale-header-parent-blog">
          <div className="row">
            <div className="col col-sm-12 col-md-10">
              <h3 href="!#" className="Flashsale-header">
                Blog Gramedia
              </h3>
            </div>
            <div className="col col-sm-12 col-md-2 lihat-semua">
              <a href="!#" className="FlashSale-sub-header" alt="Lihat Semua">
                Lihat Semua
              </a>
            </div>

            <div className="container">
              <div className="row">
                <a
                  href="#"
                  className="act-btn"
                  style={{
                    textDecoration: "none",
                    color: "white"
                  }}
                >
                  <i class=" fa fa-comment"> Chat</i>
                </a>
                <div className="col col-md-6 col-sm-12">
                  <div class="card-blog">
                    <a href="https://www.gramedia.com/blog/masa-depan-pendidikan-di-indonesia-iwan-pranoto-haidar-bagir/">
                      <img
                        src="https://www.gramedia.com/blog/content/images/size/w1000/2019/11/pendidikan-di-indonesia.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                    </a>
                    <div class="card-body-blog">
                      <h5 class="card-tag-blog">TRIVIA</h5>
                      <a href="" alt="..." class="card-title-blog">
                        Masa Depan Pendidikan di Indonesia Harus Seimbang dengan
                        Teknologi
                      </a>
                      <h5 class="card-date-blog">19 November 2019</h5>
                    </div>
                  </div>
                </div>
                <div className="col col-md-6 col-sm-12">
                  <div class="box">
                    <a href="https://www.gramedia.com/blog/masa-depan-pendidikan-di-indonesia-iwan-pranoto-haidar-bagir/">
                      <div className="image-box">
                        <img
                          src="https://www.gramedia.com/blog/content/images/2019/11/Putri-Marino.jpg"
                          //   class="card-img-top"
                          alt="..."
                        />
                      </div>
                    </a>
                    <div class="box-content">
                      <h5 class="box-sub-content">PUTRI MARINO</h5>
                      <a href="" alt="..." class="box-title">
                        Menanti Perilisan Buku Perdana Putri Marino
                      </a>
                      <h5 class="box-date">19 November 2019</h5>
                    </div>
                  </div>
                  <div class="box second-content">
                    <a href="https://www.gramedia.com/blog/8-buku-rekomendasi-gramedia-november/">
                      <div className="image-box">
                        <img
                          src="https://www.gramedia.com/blog/content/images/size/w1000/2019/11/header-blog_nov_revisi-banner-blog-ultah-penulis-ok.png"
                          //   class="card-img-top"
                          alt="..."
                        />
                      </div>
                    </a>
                    <div class="box-content">
                      <h5 class="box-sub-content">REKOMENDASI BUKU</h5>
                      <a href="" alt="..." class="box-title">
                        8 Buku Rekomendasi November 2019
                      </a>
                      <h5 class="box-date">19 November 2019</h5>
                    </div>
                  </div>
                  <div class="box third-content">
                    <a href="https://www.gramedia.com/blog/author-of-the-month-profil-regis-machdy-tertarik-psikologi/">
                      <div className="image-box">
                        <img
                          src="https://www.gramedia.com/blog/content/images/size/w1000/2019/11/header-blog_nov_author-of-the-month_author-of-the-month_author-of-the-month.png"
                          //   class="card-img-top"
                          alt="..."
                        />
                      </div>
                    </a>
                    <div class="box-content">
                      <h5 class="box-sub-content">AUTHOR OF THE MONTH </h5>
                      <a href="" alt="..." class="box-title">
                        AUTHOR OF THE MONTH: Regis Machdy Tertarik Psikologi
                        Sejak Baca Sheila
                      </a>
                      <h5 class="box-date-third">19 November 2019</h5>
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
