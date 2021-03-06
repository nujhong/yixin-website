import React from 'react'
import Header from '../components/Header'
import Hero from '../components/contents/Hero'
import About from '../components/contents/About'
import Services from '../components/contents/Services'
import Footer from '../components/Footer'

const IndexPage = ({
	data: {
		markdownRemark: { frontmatter },
		allMarkdownRemark: data,
	},
}) => (
	<div>
		<Header />
		<Hero frontmatter={frontmatter} />
		<About frontmatter={frontmatter} />
		<Services frontmatter={frontmatter} data={data} />
		<Footer frontmatter={frontmatter} />
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
					id
					frontmatter {
						title
						image
						sub_items
						category
					}
					childImageSharp {
						sizes(maxWidth: 590, maxHeight: 380) {
							...GatsbyImageSharpSizes
						}
					}
				}
			}
		}
		markdownRemark(id: { regex: "/pages/home/index.md/" }) {
			...AboutFragment
			...ServicesFragment
			...HeroFragment
			...FooterFragment
		}
	}
`
