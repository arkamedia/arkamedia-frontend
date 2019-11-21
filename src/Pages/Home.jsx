import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import MainCarousel from "../Components/MainCarousel/MainCarousel";
import FlashSale from "../Components/FlashSale/FlashSale";
import BookPopular from "../Components/BookPopular/BookPopular";
import PromoList from "../Components/PromoList/PromoList";
import ChoiceBrand from '../Components/ChoiceBrand/ChoiceBrand';
import Footer from '../Components/Footer/Footer'
//import RegistForm from '../Components/RegistForm/RegistForm';

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <MainCarousel />
        <PromoList />
        <FlashSale /> 
        <BookPopular />
        <BookPopular />
        <ChoiceBrand />
        <Footer />
      </>
    );
  }
}

export default Home;
