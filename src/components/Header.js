import React, { Component } from 'react';
import {
  Columns, Column, Button, Hero, HeroHeader, HeroBody, Container, Title, Subtitle, Navbar, NavbarBrand, NavbarBurger, NavbarItem, NavbarMenu, NavbarStart, NavbarLink, NavbarEnd
} from 'bloomer';
import Block from './Block';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    const { title, summary, image } = this.props.data;
    return (
      <Hero isColor='dark' isSize='medium'>
        <HeroHeader>
          <Navbar isShadowless className='is-dark'>
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
        </HeroHeader>

        <HeroBody style={{background: 'linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('+ image + '), center center', backgroundSize: 'cover'}}>
          <Container hasTextAlign='centered'>
            <Block>
              <Title isSize='1'>{title}</Title>
              <Subtitle>{summary}</Subtitle>
            </Block>
            <Block>
              <Columns isCentered>
                <Column isSize='1/4'>
                  <div className='buttons'>
                    <Button isColor='info'>网上报价</Button>
                    <Button href='tel:+61-478-706-793' isColor='info' isInverted>呼叫 0478 706 793</Button>
                  </div>
                </Column>
              </Columns>
            </Block>
          </Container>
        </HeroBody>
      </Hero>
    )
  }
};

export default Header;
