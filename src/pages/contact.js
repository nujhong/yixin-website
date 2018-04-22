import React, { Component } from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import HeroSection from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import ServicesList from '../components/ServicesList'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import { Box, Container, Section, Hero, HeroBody, Columns, Column, Title } from 'bloomer'

const ContactPage = () => (
  <div>
    <Header />
    <Section>
      <Container>
        <Title>为了让我们更快的提供报价，您可以上传一些与工程有关的图片来帮助我们</Title>
      </Container>
    </Section>
    <Hero>
      <HeroBody>
        <Container>
            <Columns isVCentered>
              <Column isSize={4}>
                <article class="message is-primary">
                  <div class="message-header">
                    <p>Primary</p>
                    <button class="delete" aria-label="delete"></button>
                  </div>
                  <div class="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                  </div>
                </article>

              </Column>
              <Column isSize={8}>
                <Box>
                  <ContactForm />
                </Box>
              </Column>
            </Columns>
        </Container>
      </HeroBody>
    </Hero>
    <Footer />
  </div>
)

export default ContactPage
