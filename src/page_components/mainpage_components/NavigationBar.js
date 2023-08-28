import React, { Component } from 'react' 
// Optional import lar {} içinde alınır, default direkt alınır
// Sadece bir tane export default olur fakat optional olanlardan birden fazla export olabilir
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, UncontrolledDropdown, 
         DropdownToggle, DropdownMenu, DropdownItem,  NavbarText, Placeholder, Button } from 'reactstrap';
import 'primeicons/primeicons.css';

export default class NavigationBar extends Component 
{
  constructor(props)
  {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state =
    {
      isOpen: false
    };
  }

  toggle() 
  {
    this.setState( {isOpen : !this.state.isOpen} );
  }
  
  render() 
  {
    return(
      <div>
        <Placeholder color ='danger' xs = {12} size ='sm'/>

        <Navbar color ='info'>
          <NavbarText style = {{fontSize : '1.3rem'}}>
            <i className ='pi pi-shopping-cart' style = {{ color : '#8a2be2', fontSize : '2.0rem'}}/>
            <b>{this.props.cart.length}</b> products in the cart
          </NavbarText>

          <NavbarBrand style = {{color : '#8a2be2', fontSize : '3.0rem'}}><b>TECHNOLOGY STORE</b></NavbarBrand>

          <Button color ='warning' onClick={this.onClickAddNewProduct}>Add New Product</Button> 

          <NavbarToggler onClick = {this.toggle}/>

          <Collapse isOpen = {this.state.isOpen} navbar>
            <Nav className ='me-auto' navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style = {{textAlign : 'right'}}>Options</DropdownToggle>

                <DropdownMenu right style = {{textAlign : 'center'}}>
                  <DropdownItem>Registered Customer List <i className ='pi pi-list'/></DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem>Sales List Information <i className ='pi pi-info-circle'/></DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem>Show My Cart <i className ='pi pi-shopping-cart'/></DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem>Log Out <i className ='pi pi-sign-out'/></DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>

        <Placeholder color ='danger' xs = {12} size ='lg'/>
      </div>
    );
  }
}