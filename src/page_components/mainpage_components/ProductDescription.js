// import React, { Component } from 'react'
// import { Table, Button } from 'reactstrap'

// export default class ProductDescription extends Component
// {
//   render()
//   {
//     return(
//       <div>
//         <h2>{this.props.info.title} {"-->"} {this.props.currentProductType}</h2>

//         <Table responsive hover>
//           <thead>
//             <tr>
//               <th>Product Type ID</th>
//               <th>Unit Price</th>
//               <th>Quantity</th>
//               <th>Brand</th>
//               <th>Colour</th>
//               <th>Production Date</th>
//               <th> </th>
//             </tr>
//           </thead>

//           <tbody>
//             {
//               this.props.descriptions.map (productDesc => (
//                 <tr key = {productDesc.id}>
//                   <th scope ='row'> {productDesc.productTypeId}</th>
//                   <td>{productDesc.unitPrice}</td>
//                   <td>{productDesc.quantity}</td>
//                   <td>{productDesc.brand}</td>
//                   <td>{productDesc.colour}</td>
//                   <td>{productDesc.productionDate}</td>
//                   <td><Button color ='success' onClick = {() => this.props.addToCart(productDesc)}>Add To Cart</Button></td>
//                 </tr>))
//             }
//           </tbody>
//         </Table>
//       </div>
//     );
//   }
// }
