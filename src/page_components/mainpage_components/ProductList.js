// import React, { Component } from 'react'
// import { ListGroup, ListGroupItem } from 'reactstrap'

// export default class ProductList extends Component
// {
//   /*
//   constructor(props)
//   {
//     super(props); // props u component e gönderir, super extend kısmına gider
//     this.state = {}
//   }
//   */

//   state =
//   {
//     products:
//     [
//       // { productId : 1 , productName : "CellPhones"},
//       // { productId : 2 , productName : "Tablets"},
//       // { productId : 3 , productName : "Notebooks"},
//       // { productId : 4 , productName : "Televisions"},
//       // { productId : 5 , productName : "Modems"}
//     ],
//   }

//   componentDidMount()
//   {
//     this.getProductList(); // Component yerleşti, şimdi ürün listesini doldur anlamına gelir
//   }

//   getProductList = () =>
//   {
//     fetch("http://localhost:3000/productList")
//       .then(response => response.json()) // fetch le çağrılan datadan gelen response u json a döndürür
//       .then(data => this.setState( {products : data} )); // Gelen json datasındaki products değerini data yapıyor
//       // Şimdi yukarıdaki products array i boş kalabilir
//   }

//   render()
//   {
//     return(
//       <div>
//         <h2>{this.props.info.title}</h2>

//         <ListGroup>
//           {
//             // product denen şey array in her bir satırına denk gelen ve burada oluşturulan değişkendir
//             // Her bir eleman diğerinden ayrılsın diye döngüler yapınca key eklemek gerekir
//             this.state.products.map (product => (
//               <ListGroupItem key = {product.id} onClick = {() => this.props.changeProductType(product)}
//                              active = {product.productName === this.props.currentProductType ? true : false}>
//                 {product.productName}
//               </ListGroupItem>))
//           }
//         </ListGroup>

//         { /*<h4>{this.props.currentProductType}</h4> --> Bu kısmı artık yoruma alınabilir*/ }
//       </div>
//     );
//   }
// }
