import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import About from '../components/About'
import Services from '../components/Services';
import ServicesList from '../components/ServicesList';

import { Container, Section, Hero, HeroBody } from 'bloomer';

const IndexPage = ({ data }) => {
  const { edges: sections } = data.allSectionsYaml;
  const { edges: services } = data.allServicesYaml;

  return (
    <div>
      <Header data={sections[1].node} />
      <Section>
        <Container>
          <About data={sections[0].node} />
        </Container>
      </Section>
      <Section>
        <Container>
          <Services />
        </Container>
      </Section>
      <Section>
        <Container>
          {services.map(({ node: category }, index) => (
            <ServicesList data={category.services} index={index} />
          ))}

        </Container>
      </Section>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allSectionsYaml {
      edges {
        node {
          title
          summary
          image
        }
      }
    }
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
