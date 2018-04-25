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

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = { showModal: false }
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render() {
    console.log(this.props)
    const { services, contents } = this.props.data

    return (
      <div>
        <Header />
        <HeroSection toggleModal={this.toggleModal} />
        <Section>
          <Container>
            <About data={this.props.data.allContentYaml.edges[0].node} />
          </Container>
        </Section>
        <Section className="has-background-white-bis">
          <Container>
            <Services />
          </Container>
        </Section>
        <Section className="has-background-grey">
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
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    serivces: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
    ) {
      edges {
        node {
          frontmatter {
            services
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
