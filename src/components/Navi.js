import React, { useState, useEffect, createContext } from "react";
import CategoryService from "../pages/CategoryService";
import { useCategoryFilter } from "./CategoryFilterContext";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryItems, setCategoryItems] = useState([]);
  const toggle = () => setIsOpen(!isOpen);
  const { categoryFilter, setCategoryFilter } = useCategoryFilter();

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     console.log("a");
  //     try {
  //       const response = await CategoryService.getAllCategories();
  //       const categoryItems = response.data.map((item) => ({
  //         id: item.id,
  //         categoryName: item.categoryName,
  //       }));
  //     } catch (error) {
  //       console.error("Error fetching cart items:", error);
  //     }
  //   };

  //   fetchCategories();
  // });
  useEffect(() => {
    // Fetch data from your API
    fetch("api/category")
      .then((response) => response.json())
      .then((data) => {
        // Update 'categoryItems' state with the fetched data
        setCategoryItems(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleFilter = (id) => {
    setCategoryFilter(id);
    console.log(id);
    //pass the id value to the CartContainer and add filtering logic
    //by default make it list all products
  };

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand className="nav-h3" onClick={() => handleFilter(0)}>
          ANA SAYFA
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Categoriler
              </DropdownToggle>
              <DropdownMenu>
                {categoryItems.map((category) => (
                  <DropdownItem
                    key={category.id}
                    onClick={() => handleFilter(category.id)}
                  >
                    <span>{category.categoryName}</span>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Bu öylesine bir yazı</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
