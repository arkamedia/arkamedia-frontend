import React, { Component } from "react";
import "./EditorChoice.css";
import "../Flash_Sale/flickity.css";

// Or for ES2015 module
import Flickity from "react-flickity-component";

const flickityOptions = {
  initialIndex: 1
};

export class EditorChoice extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h3>Pilihan Redaksi</h3>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Flickity
              className={"carousel"} // default ''
              elementType={"div"} // default 'div'
              options={flickityOptions} // takes flickity options {}
              disableImagesLoaded={false} // default false
              reloadOnUpdate // default false
              static // default false
            >
              <div class="card-editor">
                <a href="https://www.gramedia.com/curation/asian-interest-novels">
                  <img
                    src="https://cdn.gramedia.com/uploads/review-collection/thumbnails/asian-novels__wauto_h129.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                </a>
                <div class="card-body-editor">
                  <h5 class="card-title-editor">Asian Interest Novels</h5>
                </div>
              </div>
              <div class="card-editor">
                <a href="https://www.gramedia.com/curation/minimalist-living-books">
                  <img
                    src="https://cdn.gramedia.com/uploads/review-collection/header/minimalism__w1024_hauto.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                </a>
                <div class="card-body-editor">
                  <h5 class="card-title-editor">Minimalist Living Books</h5>
                </div>
              </div>
              <div class="card-editor">
                <a href="https://www.gramedia.com/curation/dari-wattpad-ke-novel">
                  <img
                    src="https://cdn.gramedia.com/uploads/review-collection/header/PINEOAK__w1024_hauto.png"
                    class="card-img-top"
                    alt="..."
                  />
                </a>
                <div class="card-body-editor">
                  <h5 class="card-title-editor">Dari Wattpad ke Novel</h5>
                </div>
              </div>
            </Flickity>
          </div>
        </div>
      </div>
    );
  }
}
