import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class Categories extends Component 
{
  /*
  constructor(props)
  {
    super(props); // propsu componente gönderir, super extend kısmına gider
    this.state = {}
  }
  */

  state = 
  {
    categories:[
      { categoryId : 1 , categoryName : "CellPhones"},
      { categoryId : 2 , categoryName : "Laptops"},
      { categoryId : 3 , categoryName : "Tablets"},
      { categoryId : 4 , categoryName : "Televisions"},
      { categoryId : 5 , categoryName : "Cameras"},
      { categoryId : 6 , categoryName : "Headphones"},
      { categoryId : 7 , categoryName : "Smart Watches"},
    ],
  }

  render() 
  {
    return (
      <div>
        <h2>{this.props.info.title}</h2>

        <ListGroup>
          {
            // category denen şey arrayin her bir satırına denk gelen ve burada oluşturduğumuz değişken
            // her bir eleman diğerinden ayrılsın diye döngüler yapınca key eklememiz gerekir
            this.state.categories.map(category => (<ListGroupItem key = {category.categoryId} onClick = {() => this.props.changeCategory(category)} >
                                                                  {category.categoryName}
                                                  </ListGroupItem>))
          }
        </ListGroup>

        <h4>{this.props.currentCat}</h4>
      </div>
    )
  }
}
