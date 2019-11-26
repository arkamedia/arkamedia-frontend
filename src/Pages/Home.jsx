import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import MainCarousel from "../Components/MainCarousel/MainCarousel";
import FlashSale from "../Components/FlashSale/FlashSale";
import BookPopular from "../Components/BookPopular/BookPopular";
import PromoList from "../Components/PromoList/PromoList";
import ChoiceBrand from '../Components/ChoiceBrand/ChoiceBrand';
import Footer from '../Components/Footer/Footer'
//import RegistForm from '../Components/RegistForm/RegistForm';
import { getBookByType, getProductByType } from '../Config/product';
import Blog from '../Components/Blog/blog'
import {Link} from 'react-router-dom'



class Home extends Component {
  constructor() {
    super()
    this.state = {
      popularNovel: [],
      popularBook: []
    }

  }

  componentDidMount() {
    getBookByType('novel', 1, 5).then(result => {
      if (result) {
        this.setState({
          popularNovel: result.results
        })
      }
    });

    getProductByType('book', 2, 5).then(result => {
      if (result) {
        this.setState({
          popularBook: result.results
        })
      }
    })
  }

  render() {
    const { popularNovel, popularBook } = this.state
    console.log('popular', popularBook)
    return (
      <>
        <Navbar />
        <MainCarousel />
        <PromoList />
        <FlashSale />

        {/* BukuBuku Populer */}
        <BookPopular
          headerTitle='Buku - Buku Populer'
          imgBanner='https://cdn.gramedia.com/uploads/category-list/Product_List_Banner-07__w320_hauto.jpg'
        >
          {popularBook.map(book => {
            return (
              <div className="col col-md-2 col-sm-12 card-popular " key={book.product_id}>
                <div class="card">
                  <img
                    src={book.imgurl}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <Link to={{
                      pathname: `/detail/${book.product_name.split(' ').join('-')}`,
                      state: {
                        product_id : book.product_id
                      }
                    }}>
                    <h5 class="card-title">
                      {book.product_name}
                    </h5>
                    </Link>
                    
                    <p class="card-author">{book.author}</p>
                    <p class="card-price">
                      Rp.{" "}
                      {book.price +
                        book.price * (20 / 100)}

                      <span class="badge badge-primary">20%</span>
                    </p>
                    <h2 className="price-result">Rp.   {book.price}</h2>
                  </div>
                </div>
              </div>
            )
          })}</BookPopular>

        {/* //Novel Populer */}
        <BookPopular
          headerTitle='Novel Paling Laris'
          imgBanner='https://cdn.gramedia.com/uploads/category-list/Product_List_Banner-novel_paling_laris1__w320_hauto.jpg' >
          {popularNovel.map(novel => {
            return (
              <div className="col col-md-2 col-sm-12 card-popular " key={novel.product_id}>
                <div class="card">
                  <img
                    src={novel.imgurl}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <Link to={{
                      pathname:`/detail/${novel.product_name.split(' ').join('-')}` ,
                      state:{
                        product_id: novel.product_id
                      }
                      }}>
                    <h5 class="card-title">
                      {novel.product_name}
                    </h5>
                      </Link>
                    <p class="card-author">{novel.author}</p>
                    <p class="card-price">
                      Rp.{" "}
                      {novel.price +
                        novel.price * (20 / 100)}

                      <span class="badge badge-primary">20%</span>
                    </p>
                    <h2 className="price-result">Rp.   {novel.price}</h2>
                  </div>
                </div>
              </div>
            )
          })}</BookPopular>

        <Blog />

        <ChoiceBrand />
        <Footer />
      </>
    );
  }
}

export default Home;
