import React from 'react'
import styled from 'react-emotion'
import Img from 'gatsby-image'

const PaddedImg = styled.img`
	padding: ${props => (props.isLast ? '1rem' : '0')};
`

export default ({
	frontmatter: { AboutUs_title, AboutUs_summary, columns },
}) => (
	<div className="section">
		<div className="container">
			<div className="columns">
				<div className="column is-12">
					<div className="content has-text-centered">
						<h1 className="subtitle">{AboutUs_title}</h1>
						<p className="is-size-3">{AboutUs_summary}</p>
					</div>
					<div className="columns">
						{columns.map(({ heading, paragraph, image }) => (
							<div className="column">
								<div className="content has-text-centered">
									<figure className="image is-192x192 is-centered">
										<PaddedImg src={image} alt={heading} />
									</figure>
									<h2 className="title is-4">{heading}</h2>
									<p>{paragraph}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	</div>
)

export const query = graphql`
	fragment AboutFragment on MarkdownRemark {
		frontmatter {
			AboutUs_title
			AboutUs_summary
			columns {
				heading
				paragraph
				image
			}
		}
	}
`
