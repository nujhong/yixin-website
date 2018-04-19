import React, { Component } from 'react'
import Headroom from 'react-headroom'
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
        <Navbar className='is-light'>
          <Container>
            <NavbarBrand>
              <NavbarItem>
                易信
              </NavbarItem>
              <NavbarBurger isActive={this.state.isActive} onClick={this.handleToggle} />
            </NavbarBrand>
            <NavbarMenu isActive={this.state.isActive} onClick={this.handleToggle}>
              <NavbarEnd>
                <NavbarItem href='#/'>网上报价</NavbarItem>
                <NavbarItem href='#/'>联系我们</NavbarItem>
              </NavbarEnd>
            </NavbarMenu>
          </Container>
        </Navbar>
      </Headroom>
    )
  }
}

export default Header;
