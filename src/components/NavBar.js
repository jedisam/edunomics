import React, { Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText,
} from "reactstrap";

const NavBar = () => {
  return (
    <Fragment>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>Edunomics</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className='mr-auto' navbar></Nav>
          <NavbarText>Physics</NavbarText>
        </Collapse>
      </Navbar>
    </Fragment>
  );
};

export default NavBar;
