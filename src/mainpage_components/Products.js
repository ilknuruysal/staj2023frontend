import React, { Component } from 'react'

export default class Products extends Component 
{
  render() 
  {
    return (
      <div>
        <h2>{this.props.info.title} --- {this.props.currentCat}</h2>
      </div>
    )
  }
}
