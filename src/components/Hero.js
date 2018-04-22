import React, { Component } from 'react'
import Link from 'gatsby-link'
import {
  Columns, Column, Button, Hero, HeroHeader, HeroBody, Container, Title, Subtitle
} from 'bloomer'
import Block from './Block'
import Animation from './Animation'

const HeroSection = ({ toggleModal }) => (
      <Hero isColor='dark' isSize='medium' style={{background: 'linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url("https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"), center center', backgroundSize: 'cover'}}>
        <HeroBody>
          <Container hasTextAlign='centered'>
            <Block>
              <Title isSize='1'>易信房屋建筑装修</Title>
              <Subtitle>我们为您解决澳洲收费昂贵，语言沟通困难，各种疑难的问题。欢迎免费咨询</Subtitle>
            </Block>
            <Block>
              <Columns isCentered>
                <Column isSize='1/4'>
                  <div className='buttons'>
                    <Link to='/contact' className='button is-primary'>网上报价</Link>
                    <Button href='tel:+61-478-706-793' isColor='primary' isInverted>呼叫 0478 706 793</Button>
                  </div>
                </Column>
              </Columns>
            </Block>
          </Container>
        </HeroBody>
      </Hero>
    )

export default HeroSection
