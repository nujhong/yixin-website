import React, { Component } from 'react'
import Headroom from 'react-headroom'
import Link from 'gatsby-link'
import { Container, Navbar, NavbarBrand, NavbarBurger, NavbarItem, NavbarMenu, NavbarStart, NavbarLink, NavbarEnd } from 'bloomer'

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { isActive: false }
  }

  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    return (
      <Headroom>
        <Navbar className='is-primary'>
          <Container>
            <NavbarBrand>
              <Link to="/" className="navbar-item">易信</Link>
              <NavbarBurger isActive={this.state.isActive} onClick={this.handleToggle} />
            </NavbarBrand>
            <NavbarMenu isActive={this.state.isActive} onClick={this.handleToggle}>
              <NavbarEnd>
                <Link to="/contact" className="navbar-item">网上报价</Link>
              </NavbarEnd>
            </NavbarMenu>
          </Container>
        </Navbar>
      </Headroom>
    )
  }
}

export default Header;
