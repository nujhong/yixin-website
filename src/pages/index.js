import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import HeroSection from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import ServicesList from '../components/ServicesList'
import Footer from '../components/Footer'
import { Container, Section, Hero, HeroBody } from 'bloomer'

const IndexPage = ({ data }) => {
  const { edges: services } = data.allServicesYaml

  return (
    <div>
      <Header />
      <HeroSection />
      <Section>
        <Container>
          <About />
        </Container>
      </Section>
      <Section className='has-background-light'>
        <Container>
          <Services />
        </Container>
      </Section>
      <Section className='has-background-dark'>
        <Container>
          {services.map(({ node: category }, index) => (
            <ServicesList data={category.services} index={index} />
          ))}
        </Container>
      </Section>
      <Footer />
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allServicesYaml {
      edges {
        node {
          services {
            title
            image
            sub_items
          }
        }
      }
    }
  }
`
