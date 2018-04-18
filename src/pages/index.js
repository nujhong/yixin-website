import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import About from '../components/About'
import Services from '../components/Services';
import ServicesList from '../components/ServicesList';

import { Container, Section, Hero, HeroBody } from 'bloomer';

const IndexPage = ({ data }) => {
  console.log(data)
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
    allServicesYaml {
      edges {
        node {
          services {
            title
          }
        }
      }
    }
  }
`
