import React from "react";
import "./CartOrder.css";


const CartOrder = () => {
    return (
  <>
    <div className="col-8">
      <div className="row">
        <div className="col-2 icon-book">
          <img
            src="https://cdn.gramedia.com/uploads/items/550000964_Ensiklopedia_Cerdas_Alam_Sekitar-Cover_utk_PK_10_Okt__w110_hauto.jpg"
            alt="ordered book"
          />
        </div>
        <div className="col-5">
          <a className="title-book" href="#!">
            Ensiklopedia Cerdas: Alam Sekitar
          </a>
          <br />
          <a className="author-book" href="#!">
            Nanda
          </a>
          <p style={{ marginTop: "20px" }}>
            <a className="product-format" href="#!">
              Soft Cover
            </a>
          </p>
          <p style={{ marginTop: "-20px" }}>
            <a className="price-book" href="#!">
              Rp 19.000
            </a>
          </p>
        </div>
        <div className="col-3">
          <div className="form-row">
            <div className="col-md-2 mb-3">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                id="buttonOrder"
              >
                -
              </button>
            </div>
            <div className="col-md-4 mb-3">
              <input
                type="text"
                className="form-control form-control-sm"
                value="2"
                style={{ textAlign: "center" }}
              />
            </div>
            <div className="col-md-1 mb-3">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                id="buttonOrder"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="col-2" style={{ textAlign: "right" }}>
          <a className="subtotal" href="#!">
            Subtotal
          </a>
          <br />
          <p>
            <a className="price-book" href="#!">
              Rp 48.000
            </a>
          </p>

          <p className="hapus-order">
            <a href="#!">Hapus</a>
          </p>
        </div>
      </div>
    </div>
  </>
  );
};

export default CartOrder;
