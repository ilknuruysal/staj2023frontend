import React, { Component } from 'react'
import NavigationBar from './mainpage_components/NavigationBar';
import Categories from './mainpage_components/Categories';
import Products from './mainpage_components/Products';
import { Col, Container, Row } from 'reactstrap';

export default class MainPage extends Component
{
  state =
  {
    currentCategory : ""
  }
  // Bu bir arrow function yani aslında state gibi bir değişkendir. "()" ifadesi onun bir fonksiyon olduğunu gösterir
  changeCategory = (category) => 
  {
    this.setState({currentCategory : category.categoryName})
  }
  
  render()
  {
    let categoryInfo = {title : "Categories"} // obj. notasyon olduğu için 2 nokta var
    let productInfo = {title : "Products"} // yeni eklenecek özellikleri {} içine ekleriz

    return (
      <div> 
        <Container>
          <Row>
            <NavigationBar />
          </Row>
  
          <Row>
            <Col xs="3">
              <Categories info = {categoryInfo} changeCategory = {this.changeCategory} currentCat = {this.state.currentCategory}/>
            </Col>
            
            <Col xs="9">
              <Products info = {productInfo} currentCat = {this.state.currentCategory}/> 
            </Col>  
          </Row> 
        </Container>
      </div> // container geldiği için div kapatılabilirdi
    );
  }
}
