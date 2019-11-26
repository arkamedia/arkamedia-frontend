import React, { Component } from "react";
import "./flickity.css";
import "./FlashSale.css";
import { getFlashSale } from "../../Config/product";

// Or for ES2015 module
import Flickity from "react-flickity-component";

const flickityOptions = {
  initialIndex: 1
};

class FlashSale extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    getFlashSale(1, 10).then(result => {
      if (result) {
        this.setState({
          data: result
        });
      }
    });
  }
  render() {
    console.log(this.state.data);
    return (
      <div className="FlashSale">
        <div className="container">
          <div className="Flashsale-header-parent">
            <div className="row" style={{ paddingBottom: "30px" }}>
              <div className="col col-sm-12 col-md-10">
                <a href="!#" className="Flashsale-header">
                  Flash Sale
                </a>
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
              width: "100%",
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
                      {this.state.data.map((book, id) => {
                        return (
                          <div class="card" key={id}>
                            <img
                              src={book.imgurl}
                              class="card-img-top"
                              alt="..."
                            />
                            <div class="card-body">
                             <a href='#!'> <h5 class="card-title">  {book.product_name}</h5> </a>
                              <p class="card-author">
                                {book.author ? book.author : "-"}
                              </p>
                              <p class="card-price">
                                Rp.{" "}
                                {book.price +
                                  book.price * (20 / 100)}
                                <span class="badge badge-primary">
                                  20%
                                </span>
                              </p>
                              <h2 className="price-result">Rp. {book.price}</h2>
                            </div>
                          </div>
                        );
                      })}
                    </Flickity>
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
export default FlashSale;
