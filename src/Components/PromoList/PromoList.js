import React from "react";
// import { Col, Row, Image, Card } from "react-bootstrap";
import "./PromoList.css";

class PromoList extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div
            className="row"
            style={{
              paddingBottom: "80px",
              marginTop: "50px",
              marginRight: "2px"
            }}
          >
            <div className="col lingkaran5">
              <img
                className="img"
                src="https://res.cloudinary.com/afsori/image/upload/v1574126386/Arkamedia/notebook_mdlgej.png"
                alt="file is loading"
              />
              <a href="#!" className="a">
                Buku Baru
              </a>
            </div>
            <div className="col lingkaran5">
              <img
                className="img"
                src="https://res.cloudinary.com/afsori/image/upload/v1574127711/Arkamedia/bookshelf_gvngpe.png"
                alt="file is loading"
              ></img>
              <a href="#!" className="a">
                Buku Pilihan
              </a>
            </div>
            <div className="col lingkaran5">
              <img
                className="img"
                src="https://res.cloudinary.com/afsori/image/upload/v1574127441/Arkamedia/notebo_dgpq3h.png"
                alt="file is loading"
              ></img>
              <a href="#!" className="b">
                National BestSeller
              </a>
            </div>
            <div className="col lingkaran5">
              <img
                className="img"
                src="https://res.cloudinary.com/afsori/image/upload/v1574126386/Arkamedia/notebook2_eihxuz.png"
                alt="file is loading"
              ></img>
              <a href="#!" className="a">
                Buku import
              </a>
            </div>
            <div className="col lingkaran5">
              <img
                className="img"
                src="https://res.cloudinary.com/afsori/image/upload/v1574127441/Arkamedia/printer_x7kryv.png"
                alt="file is loading"
              ></img>
              <a href="#!" className="b">
                Print On Demand
              </a>
            </div>
            <div className="col lingkaran5">
              <img
                className="img"
                src="https://res.cloudinary.com/afsori/image/upload/v1574127441/Arkamedia/note_nhl6s2.png"
                alt="file is loading"
              ></img>
              <a href="#!" className="b">
                Harga Spesial
              </a>
            </div>
            <div className="col lingkaran5">
              <img
                className="img"
                src="https://res.cloudinary.com/afsori/image/upload/v1574127441/Arkamedia/shoes_nzm6no.png"
                alt="file is loading"
              ></img>
              <a href="#!" className="a">
                Gaya Hidup
              </a>
            </div>
            <div className="col lingkaran5">
              <img
                className="img"
                src="https://res.cloudinary.com/afsori/image/upload/v1574126915/Arkamedia/backpack_gdohcl.png"
                alt="file is loading"
              ></img>
              <a href="#!" className="b">
                Eversac
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PromoList;
