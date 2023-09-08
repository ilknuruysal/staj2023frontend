// import React, { Component } from "react";
// import { Container, Row, Col } from "reactstrap";
// import CategoryList from "./CategoryList";
// import ProductList from "./ProductList";
// import SellingList from "./SellingList";

// export default class Main extends Component {
//   state = {
//     currentCategory: null,
//   };

//   changeCategory = (categoryId) => {
//     console.log("Change category to:", categoryId);
//     this.setState({ currentCategory: categoryId });
//   };

//   render() {
//     return (
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <CategoryList changeCategory={this.changeCategory} />
//         <ProductList currentCategory={this.state.currentCategory} />
//         <SellingList />
//       </div>
//     );
//   }
// }
import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate and Link
import SellingList from "./SellingList";
import ProductList from "./ProductList";

export default class Main extends Component {
  state = {
    currentCategory: null,
    categories: [],
    newCategoryName: "",
    filteredCategory: null,
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/api/category")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  handleInputChange = (event) => {
    this.setState({ newCategoryName: event.target.value });
  };

  createCategory = () => {
    const newCategory = { categoryName: this.state.newCategoryName };
    fetch("http://localhost:3000/api/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCategory),
    })
      .then((response) => response.json())
      .then(() => {
        this.getCategories();
        this.setState({ newCategoryName: "" });
      });
  };

  deleteCategory = (categoryId) => {
    fetch(`http://localhost:3000/api/category/${categoryId}`, {
      method: "DELETE",
    }).then(() => {
      this.getCategories();
    });
  };

  changeCategory = (categoryId) => {
    console.log("Change category to:", categoryId);
    this.setState({ currentCategory: categoryId });
  };

  handleLogout = () => {
    // Clear user authentication token from localStorage
    localStorage.removeItem("authToken");

    // Redirect to login page
    window.location.href = "/login";
  };
  render() {
    const { categories, newCategoryName, filteredCategory } = this.state;

    return (
      <div style={{ display: "flex" }}>
        {/* Category List (Left Side) */}
        <div style={{ flex: 1, marginRight: "20px" }}>
          <h3>Category List</h3>
          <Form inline>
            <FormGroup>
              <Input
                type="text"
                placeholder="Enter category name"
                value={newCategoryName}
                onChange={this.handleInputChange}
              />
            </FormGroup>{" "}
            <Button color="primary" onClick={this.createCategory}>
              Create Category
            </Button>
          </Form>
          <ListGroup>
            {categories.map((category) => (
              <ListGroupItem key={category.id}>
                {category.id}-{category.categoryName}
                <Button
                  color="danger"
                  size="sm"
                  className="ml-2"
                  onClick={() => this.deleteCategory(category.id)}
                >
                  Delete
                </Button>
                <Button
                  color="info"
                  size="sm"
                  className="ml-2"
                  onClick={() => this.changeCategory(category.id)}
                >
                  Filter Products
                </Button>
              </ListGroupItem>
            ))}
          </ListGroup>
          <div className="mt-2 text-center">
            {/* Use Link to navigate to WelcomePage */}
            <Link className="btn btn-secondary" onClick={this.handleLogout}>
              Logout
            </Link>
          </div>
        </div>

        {/* Product List and Selling List (Right Side) */}
        <div style={{ flex: 2 }}>
          {/* Product List */}
          <ProductList
            currentCategory={this.state.currentCategory}
            filteredCategory={filteredCategory}
          />

          {/* Selling List */}
          <SellingList />
        </div>
      </div>
    );
  }
}
