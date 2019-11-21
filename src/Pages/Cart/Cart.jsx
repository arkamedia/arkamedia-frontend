import React, { Component } from "react";
import './Cart.css';
import Navbar from "../../Components/Navbar/Navbar";
import CartOrder from '../../Components/CartOrder/CartOrder'


class Cart extends Component {
  render() {
    return ( 
      <>
        <Navbar style={{boxShadow: "0px 10px 29px 0px rgba(0,0,0,0.75)"}} />
        <div className="container" style={{ marginTop: "120px" }}>
          
            <p style={{marginLeft:'2rem'}}>
              Menampilkan <strong>2 produk</strong> dalam keranjang.
            </p>


            <div className="row">
          
              <CartOrder />  
              <CartOrder />  
              <CartOrder />  
              <CartOrder />  
              <CartOrder />         
           
              
              <div className="col-4 sticky" style={{border:'solid 1px #eee', paddingRight:'-20px'}}>
              <div className="row">
                <div className="col-6">
                  <p className="par-total">Jumlah total produk</p>                  
                </div>
                <div className="col-6" style={{textAlign:'right'}}>
                  <p className="total-price">Rp 48.000</p>
                </div>
              </div>
              <button type="button" class="btn btn-secondary btn-block btn-lg btn-pembayaran">LANJUTKAN PEMBAYARAN</button>
              </div>
            </div>
          
        </div>
      </>
    );
  }
}
export default Cart;
