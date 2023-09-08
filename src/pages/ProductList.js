import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  Button,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import ProductService from "./ProductService";
import CategoryList from "./CategoryList";

export default class ProductList extends Component {
  state = {
    products: [],
    selectedCategoryId: null,
    newProduct: {
      productName: "",
      productCategoryID: "",
      productPrice: "",
      productColor: "",
      productStock: "",
    },
    selectedProduct: null,
    updatedProduct: {
      productName: "",
      productCategoryID: "",
      productPrice: "",
      productColor: "",
      productStock: "",
    },
  };

  componentDidMount() {
    this.getProducts();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filteredCategory !== prevProps.filteredCategory) {
      this.getProducts();
    }
  }

  handleCategoryFilter = (categoryId) => {
    this.setState({ selectedCategoryId: categoryId });
  };

  // getProducts = () => {
  //   const { selectedCategoryId } = this.props;

  //   if (selectedCategoryId) {
  //     ProductService.getProductByCategory(selectedCategoryId)
  //       .then((response) => this.setState({ products: response.data }))
  //       .catch((error) => console.error("Error getting products:", error));
  //   } else {
  //     ProductService.getAllProducts()
  //       .then((response) => this.setState({ products: response.data }))
  //       .catch((error) => console.error("Error getting products:", error));
  //   }
  // };

  getProducts = () => {
    const { selectedCategoryId, filteredCategory } = this.props;

    console.log("Filtering by selectedCategoryId:", selectedCategoryId);
    console.log("Filtering by filteredCategory:", filteredCategory);

    if (filteredCategory) {
      console.log("Fetching products for filtered category:", filteredCategory);
      ProductService.getProductByCategory(filteredCategory)
        .then((response) => {
          console.log("Fetched products:", response.data);
          this.setState({ products: response.data });
        })
        .catch((error) => console.error("Error getting products:", error));
    } else if (selectedCategoryId) {
      console.log(
        "Fetching products for selected category:",
        selectedCategoryId
      );
      ProductService.getProductByCategory(selectedCategoryId)
        .then((response) => {
          console.log("Fetched products:", response.data);
          this.setState({ products: response.data });
        })
        .catch((error) => console.error("Error getting products:", error));
    } else {
      console.log("Fetching all products");
      ProductService.getAllProducts()
        .then((response) => {
          console.log("Fetched products:", response.data);
          this.setState({ products: response.data });
        })
        .catch((error) => console.error("Error getting products:", error));
    }
  };

  toggleCreateProductForm = () => {
    this.setState({
      newProductFormVisible: !this.state.newProductFormVisible,
      newProduct: {
        productName: "",
        productCategoryID: "",
        productPrice: "",
        productColor: "",
        productStock: "",
      },
    });
  };

  createProduct = () => {
    const newProductData = { ...this.state.newProduct };
    ProductService.createProduct(newProductData)
      .then(() => {
        this.getProducts();
        this.setState({
          newProductFormVisible: false,
        });
      })
      .catch((error) => console.error("Error creating product:", error));
  };

  toggleUpdateForm = (product) => {
    this.setState({
      updatingProduct: product,
      updatedProduct: { ...product },
    });
  };

  updateProduct = () => {
    const updatedProductData = { ...this.state.updatedProduct };
    ProductService.updateProductById(
      this.state.updatingProduct.id,
      updatedProductData
    )
      .then(() => {
        this.getProducts();
        this.setState({
          updatingProduct: null,
          updatedProduct: {
            productName: "",
            productCategoryID: "",
            productPrice: "",
            productColor: "",
            productStock: "",
          },
        });
      })
      .catch((error) => console.error("Error updating product:", error));
  };

  deleteProduct = (productId) => {
    ProductService.deleteProductById(productId)
      .then(() => {
        this.getProducts();
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

  render() {
    const filteredProducts = this.state.selectedCategoryId
      ? this.state.products.filter(
          (product) =>
            product.productCategoryID == this.state.selectedCategoryId
        )
      : this.state.products;

    return (
      <div>
        <h3>Product List</h3>
        <Button color="success" onClick={this.toggleCreateProductForm}>
          {this.state.newProductFormVisible ? "Cancel" : "Create Product"}
        </Button>
        {this.state.newProductFormVisible && (
          <Form inline>
            <FormGroup>
              <Input
                type="text"
                placeholder="Product Name"
                value={this.state.newProduct.productName}
                onChange={(e) =>
                  this.setState({
                    newProduct: {
                      ...this.state.newProduct,
                      productName: e.target.value,
                    },
                  })
                }
              />
            </FormGroup>{" "}
            <FormGroup>
              <Input
                type="text"
                placeholder="Category ID"
                value={this.state.newProduct.productCategoryID}
                onChange={(e) =>
                  this.setState({
                    newProduct: {
                      ...this.state.newProduct,
                      productCategoryID: e.target.value,
                    },
                  })
                }
              />
            </FormGroup>{" "}
            <FormGroup>
              <Input
                type="text"
                placeholder="Price"
                value={this.state.newProduct.productPrice}
                onChange={(e) =>
                  this.setState({
                    newProduct: {
                      ...this.state.newProduct,
                      productPrice: e.target.value,
                    },
                  })
                }
              />
            </FormGroup>{" "}
            <FormGroup>
              <Input
                type="text"
                placeholder="Color"
                value={this.state.newProduct.productColor}
                onChange={(e) =>
                  this.setState({
                    newProduct: {
                      ...this.state.newProduct,
                      productColor: e.target.value,
                    },
                  })
                }
              />
            </FormGroup>{" "}
            <FormGroup>
              <Input
                type="text"
                placeholder="Stock"
                value={this.state.newProduct.productStock}
                onChange={(e) =>
                  this.setState({
                    newProduct: {
                      ...this.state.newProduct,
                      productStock: e.target.value,
                    },
                  })
                }
              />
            </FormGroup>{" "}
            <Button color="success" onClick={this.createProduct}>
              Create Product
            </Button>
          </Form>
        )}
        <ListGroup>
          {filteredProducts.map((product) => (
            <ListGroupItem key={product.id}>
              <div>ID: {product.id}</div>
              <div>Product Name: {product.productName}</div>
              <div>Category ID: {product.productCategoryID}</div>
              <div>Price: {product.productPrice}</div>
              <div>Color: {product.productColor}</div>
              <div>Stock: {product.productStock}</div>
              <Button
                color="info"
                size="sm"
                onClick={() => this.toggleUpdateForm(product)}
              >
                Update
              </Button>{" "}
              <Button
                color="danger"
                size="sm"
                onClick={() => this.deleteProduct(product.id)}
              >
                Delete
              </Button>
              {this.state.updatingProduct === product && (
                <Form inline>
                  <FormGroup>
                    <Input
                      type="text"
                      placeholder="Updated Product Name"
                      value={this.state.updatedProduct.productName}
                      onChange={(e) =>
                        this.setState({
                          updatedProduct: {
                            ...this.state.updatedProduct,
                            productName: e.target.value,
                          },
                        })
                      }
                    />
                  </FormGroup>{" "}
                  <FormGroup>
                    <Input
                      type="text"
                      placeholder="Updated Category ID"
                      value={this.state.updatedProduct.productCategoryID}
                      onChange={(e) =>
                        this.setState({
                          updatedProduct: {
                            ...this.state.updatedProduct,
                            productCategoryID: e.target.value,
                          },
                        })
                      }
                    />
                  </FormGroup>{" "}
                  <FormGroup>
                    <Input
                      type="text"
                      placeholder="Updated Price"
                      value={this.state.updatedProduct.productPrice}
                      onChange={(e) =>
                        this.setState({
                          updatedProduct: {
                            ...this.state.updatedProduct,
                            productPrice: e.target.value,
                          },
                        })
                      }
                    />
                  </FormGroup>{" "}
                  <FormGroup>
                    <Input
                      type="text"
                      placeholder="Updated Color"
                      value={this.state.updatedProduct.productColor}
                      onChange={(e) =>
                        this.setState({
                          updatedProduct: {
                            ...this.state.updatedProduct,
                            productColor: e.target.value,
                          },
                        })
                      }
                    />
                  </FormGroup>{" "}
                  <FormGroup>
                    <Input
                      type="text"
                      placeholder="Updated Stock"
                      value={this.state.updatedProduct.productStock}
                      onChange={(e) =>
                        this.setState({
                          updatedProduct: {
                            ...this.state.updatedProduct,
                            productStock: e.target.value,
                          },
                        })
                      }
                    />
                  </FormGroup>{" "}
                  <Button color="success" onClick={this.updateProduct}>
                    Save
                  </Button>
                </Form>
              )}
            </ListGroupItem>
          ))}
        </ListGroup>
        {/* <CategoryList onChangeCategory={this.handleCategoryFilter} /> */}
      </div>
    );
  }
}
