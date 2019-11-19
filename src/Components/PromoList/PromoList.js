import React from "react";
import { Col, Row, Image, Card } from "react-bootstrap";
import "./PromoList.css";

class PromoList extends React.Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col className="lingkaran5">
            <img
              className="img"
              src="https://res.cloudinary.com/afsori/image/upload/v1574126386/Arkamedia/notebook_mdlgej.png"
            />
            <a href="" className="a">
              Buku Baru
            </a>
          </Col>
          <Col className="lingkaran5">
            <img
              className="img"
              src="https://res.cloudinary.com/afsori/image/upload/v1574127711/Arkamedia/bookshelf_gvngpe.png"
            ></img>
            <a href="" className="a">
              Buku Pilihan
            </a>
          </Col>
          <Col className="lingkaran5">
            <img
              className="img"
              src="https://res.cloudinary.com/afsori/image/upload/v1574127441/Arkamedia/notebo_dgpq3h.png"
            ></img>
            <a href="" className="b">
              National BestSeller
            </a>
          </Col>
          <Col className="lingkaran5">
            <img
              className="img"
              src="https://res.cloudinary.com/afsori/image/upload/v1574126386/Arkamedia/notebook2_eihxuz.png"
            ></img>
            <a href="" className="a">
              Buku import
            </a>
          </Col>
          <Col className="lingkaran5">
            <img
              className="img"
              src="https://res.cloudinary.com/afsori/image/upload/v1574127441/Arkamedia/printer_x7kryv.png"
            ></img>
            <a href="" className="b">
              Print On Demand
            </a>
          </Col>
          <Col className="lingkaran5">
            <img
              className="img"
              src="https://res.cloudinary.com/afsori/image/upload/v1574127441/Arkamedia/note_nhl6s2.png"
            ></img>
            <a href="" className="b">
              Harga Spesial
            </a>
          </Col>
          <Col className="lingkaran5">
            <img
              className="img"
              src="https://res.cloudinary.com/afsori/image/upload/v1574127441/Arkamedia/shoes_nzm6no.png"
            ></img>
            <a href="" className="a">
              Gaya Hidup
            </a>
          </Col>
          <Col className="lingkaran5">
            <img
              className="img"
              src="https://res.cloudinary.com/afsori/image/upload/v1574126915/Arkamedia/backpack_gdohcl.png"
            ></img>
            <a href="" className="b">
              Eversac
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default PromoList;
