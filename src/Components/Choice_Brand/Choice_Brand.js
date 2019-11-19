import React, { Component } from "react";
import "./Choice_Brand.css";

export class Choicebrand extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h3>Brand Pilihan</h3>
        </div>
        <div className="vendor-summary">
          <div className="row">
            <div className="col col-md-2 col-sm-12">
              <div className="vendor-summary-content">
                <a href="https://www.gramedia.com/vendor/kepustakaan-populer-gramedia">
                  <img
                    src="https://cdn.gramedia.com/uploads/vendor/kepustakaan-populer-gramedia.jpg"
                    alt="..."
                  />
                </a>
              </div>
            </div>
            <div className="col col-md-2 col-sm-12">
              <div className="vendor-summary-content">
                <a href="https://www.gramedia.com/vendor/mc">
                  <img
                    src="https://cdn.gramedia.com/uploads/vendor/Logo.png"
                    alt="..."
                  />
                </a>
              </div>
            </div>
            <div className="col col-md-2 col-sm-12">
              <div className="vendor-summary-content">
                <a href="https://www.gramedia.com/vendor/milors">
                  <img
                    src="https://cdn.gramedia.com/uploads/vendor/milors-min.jpg"
                    alt="..."
                  />
                </a>
              </div>
            </div>
            <div className="col col-md-2 col-sm-12">
              <div className="vendor-summary-content">
                <a href="https://www.gramedia.com/vendor/gramedia-pustaka-utama">
                  <img
                    src="https://cdn.gramedia.com/uploads/vendor/gramedia_gpu_PWogFpD.png"
                    alt="..."
                  />
                </a>
              </div>
            </div>
            <div className="col col-md-2 col-sm-12">
              <div className="vendor-summary-content">
                <a href="https://www.gramedia.com/vendor/al-qolam">
                  <img
                    src="https://cdn.gramedia.com/uploads/vendor/PAGE_BANNER_GRAMEDIA_-_Final-02.jpg"
                    alt="..."
                  />
                </a>
              </div>
            </div>
            <div className="col col-md-2 col-sm-12">
              <div className="vendor-summary-content">
                <a href="https://www.gramedia.com/vendor/elex-media-komputindo">
                  <img
                    src="https://cdn.gramedia.com/uploads/vendor/Logo_Brand_V0Miw8e.png"
                    alt="..."
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
