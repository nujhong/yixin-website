import React, { Component } from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import Hero from '../components/contents/Hero'
import About from '../components/contents/About'
import Services from '../components/contents/Services'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import { Container, Section, HeroBody } from 'bloomer'

const IndexPage = ({
	data: {
		markdownRemark: { frontmatter },
		allMarkdownRemark: data,
	},
}) => (
	<div>
		<Header />
		<Hero frontmatter={frontmatter} />
		<Section>
			<Container>
				<About frontmatter={frontmatter} />
			</Container>
		</Section>
		<Services frontmatter={frontmatter} data={data} />
		<Footer />
	</div>
)

export default IndexPage

export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/data/services/" } }
		) {
			edges {
				node {
					frontmatter {
						title
						image
						sub_items
						category
					}
				}
			}
		}
		markdownRemark(id: { regex: "/pages/index.md/" }) {
			...AboutFragment
			...ServicesFragment
			...HeroFragment
		}
	}
`
