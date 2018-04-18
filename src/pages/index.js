import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import About from '../components/About'
import Services from '../components/Services';
import ServicesList from '../components/ServicesList';

import { Container, Section, Hero, HeroBody } from 'bloomer';

const IndexPage = ({ data }) => {
  const { edges: services } = data.allMarkdownRemark
  return (
    <div>
      <Header />
      <Section>
        <Container>
          <About />
        </Container>
      </Section>
      <Section>
        <Container>
          <Services />
        </Container>
      </Section>
      <Section>
        <Container>
          {/* <ServicesList data={services} /> */}
        </Container>
      </Section>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
        }
      }
    }
  }
`
