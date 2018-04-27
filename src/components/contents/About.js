import React from 'react'
import {
	Card,
	CardImage,
	CardContent,
	Image,
	Columns,
	Column,
	Content,
	Title,
} from 'bloomer'
import styled from 'react-emotion'
import Table from '../Table'
import Animation from '../Animation'

export default ({ data: { title, summary, columns } }) => (
	<div className="columns">
		<div className="column is-12">
			<div className="content has-text-centered">
				<h1 className="subtitle">{title}</h1>
				<p className="is-size-3">{summary}</p>
			</div>
			<div className="columns">
				{columns.map(({ title, text, image, thumbnail }, i, { length }) => (
					<div className="column">
						<div className="content has-text-centered">
							<figure className="image is-192x192 is-centered">
								<PaddedImg src={image} isLast={length - 1 === i} />
							</figure>
							<h2 className="title is-4">{title}</h2>
							<p>{text}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	</div>
)

export const query = graphql`
	fragment AboutFragment on MarkdownRemark {
		frontmatter {
			title
			summary
			columns {
				title
				text
				image
			}
		}
	}
`
const PaddedImg = styled.img`
	padding: ${props => (props.isLast ? '1rem' : '0')};
`
