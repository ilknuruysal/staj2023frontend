// // CategoryList.js
// import React, { Component } from "react";
// import {
//   ListGroup,
//   ListGroupItem,
//   Button,
//   Input,
//   Form,
//   FormGroup,
// } from "reactstrap";

// export default class CategoryList extends Component {
//   state = {
//     categories: [],
//     newCategoryName: "",
//   };

//   componentDidMount() {
//     this.getCategories();
//   }

//   getCategories = () => {
//     fetch("http://localhost:3000/api/category")
//       .then((response) => response.json())
//       .then((data) => this.setState({ categories: data }));
//   };

//   handleInputChange = (event) => {
//     this.setState({ newCategoryName: event.target.value });
//   };

//   createCategory = () => {
//     const newCategory = { categoryName: this.state.newCategoryName };
//     fetch("http://localhost:3000/api/category", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newCategory),
//     })
//       .then((response) => response.json())
//       .then(() => {
//         this.getCategories();
//         this.setState({ newCategoryName: "" });
//       });
//   };

//   deleteCategory = (categoryId) => {
//     fetch(`http://localhost:3000/api/category/${categoryId}`, {
//       method: "DELETE",
//     }).then(() => {
//       this.getCategories();
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h3>Category List</h3>
//         <Form inline>
//           <FormGroup>
//             <Input
//               type="text"
//               placeholder="Enter category name"
//               value={this.state.newCategoryName}
//               onChange={this.handleInputChange}
//             />
//           </FormGroup>{" "}
//           <Button color="primary" onClick={this.createCategory}>
//             Create Category
//           </Button>
//         </Form>
//         <ListGroup>
//           {this.state.categories.map((category) => (
//             <ListGroupItem key={category.id}>
//               {category.id}-{category.categoryName}
//               <Button
//                 color="danger"
//                 size="sm"
//                 className="ml-2"
//                 onClick={() => this.deleteCategory(category.id)}
//               >
//                 Delete
//               </Button>
//               <Button
//                 color="info"
//                 size="sm"
//                 className="ml-2"
//                 onClick={() => this.props.changeCategory(category.id)}
//               >
//                 Filter Products
//               </Button>
//             </ListGroupItem>
//           ))}
//         </ListGroup>
//       </div>
//     );
//   }
// }
