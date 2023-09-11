// import React, { Component } from 'react'
// import NavigationBar from '../page_components/mainpage_components/NavigationBar';
// import ProductList from '../page_components/mainpage_components/ProductList';
// import ProductDescription from '../page_components/mainpage_components/ProductDescription';
// import { Col, Container, Row } from 'reactstrap';

// export default class MainPage extends Component
// {
//   state =
//   {
//     currentProductType : "",
//     productDescriptions: [],
//     cart: []
//   }

//   componentDidMount()
//   {
//     this.getProductDescriptions(); // Component yerleşti, şimdi ürün tanımlarını doldur anlamına gelir
//   }

//   // Bu bir arrow function yani aslında state gibi bir değişkendir. "()" ifadesi onun bir fonksiyon olduğunu gösterir
//   changeProductType = (product) =>
//   {
//     this.setState( {currentProductType : product.productName} );
//     //console.log(product);
//     this.getProductDescriptions(product.id);
//   };

//   getProductDescriptions = (productTypeId) =>
//   {
//     let url = "http://localhost:3000/productsAndDescriptions";

//     if (productTypeId) // Eğer id tanımlanmışsa anlamına gelir
//     {
//       url += "?productTypeId=" + productTypeId;
//     }

//     fetch(url)
//       .then(response => response.json()) // fetch le çağrılan datadan gelen responsu json a döndürür
//       .then(data => this.setState( {productDescriptions : data} ));
//   };

//   addToCart = (desiredProduct) =>
//   {
//     let newCart = this.state.cart;
//     var addedItem = newCart.find(c => c.desiredProduct.id === desiredProduct.id);
//     // Her bir cart item için ilgili cart item ın id si, bizim gönderdiğimiz id ye eşit mi bakıyor

//     if(addedItem)
//     {
//       addedItem.quatity += 1; // Aynı üründen tekrar eklenebilsin istersek bunu sileriz
//     }
//     else
//     {
//       newCart.push( {desiredProduct : desiredProduct , quantity : 1} ); // Listede o eleman yoksa ekler
//     }

//     this.setState( {cart : newCart} );
//   };

//   render()
//   {
//     let productListInfo = {title : "Products"} // Obj. notasyon olduğu için 2 nokta var
//     let productDescInfo = {title : "Product Description"} // Yeni eklenecek özellikleri {} içine ekleriz

//     return (

//       // Container geldiği için dışarıdaki div kapatıldı
//       <Container>
//         <NavigationBar cart = {this.state.cart}/>

//         <Row>
//           <Col xs ='2'>
//             <ProductList info = {productListInfo}
//                          changeProductType = {this.changeProductType}
//                          currentProductType = {this.state.currentProductType}/>
//           </Col>

//           <Col xs ='10'>
//             <ProductDescription info = {productDescInfo}
//                                 currentProductType = {this.state.currentProductType}
//                                 descriptions = {this.state.productDescriptions}
//                                 addToCart = {this.addToCart}/>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

import Navbar from "./components/Navbar";
import Navi from "./components/Navi";
import CartContainer from "./components/CartContainer";
import Order from "./components/Order";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import { useEffect } from "react";
import { CategoryFilterProvider } from "./components/CategoryFilterContext";
// import Modal from "./components/Modal";
function MainPage() {
  const { cartItems } = useSelector((store) => store.cart);
  // const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <main>
      {/* {isOpen && <Modal />} */}

      <Navi />
      <CartContainer />
      <Order />
    </main>
  );
}
export default MainPage;
