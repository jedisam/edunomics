import React, { Fragment } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';

const NavBar = () => {
  return (
    <Fragment>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Edunomics</NavbarBrand>
        <NavbarToggler  />
        <Collapse  navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">GitHub</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </Fragment>
  );
};

export default NavBar;
