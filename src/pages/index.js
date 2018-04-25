import React, { Component } from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import HeroSection from '../components/contents/Hero'
import About from '../components/contents/About'
import Services from '../components/contents/Services'
import ServicesList from '../components/contents/ServicesList'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import { Container, Section, Hero, HeroBody } from 'bloomer'

const IndexPage = ({ data: { services, contents } }) => {
  console.log(contents)
  return (
    <div>
      <Header />
      <HeroSection />
      <Section>
        <Container>
          <About data={contents.edges[0].node.frontmatter} />
        </Container>
      </Section>
      <Section className="has-background-white-bis">
        <Container>
          <Services />
        </Container>
      </Section>
      <Section className="has-background-grey">
        <Container>
          {services.edges.map(({ node: category }, index) => (
            <ServicesList data={category.frontmatter.services} index={index} />
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
    services: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
    ) {
      edges {
        node {
          frontmatter {
            services {
              title
              image
              sub_items
            }
          }
        }
      }
    }
    contents: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/" } }
    ) {
      edges {
        node {
          ...AboutFragment
        }
      }
    }
  }
`
