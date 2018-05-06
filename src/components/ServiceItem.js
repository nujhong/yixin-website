import React from 'react'
import styled from 'react-emotion'
import Img from 'gatsby-image'
import { HoverableFigure } from './Figure'
import MdDone from 'react-icons/lib/md/done'

const RaisedCard = styled('div')`
	transition-duration: 86ms;
	transition-property: box-shadow, transform;
	will-change: box-shadow, transform;
	&:hover {
		box-shadow: 0 3rem 3rem -1.25rem rgba(10, 10, 10, 0.1);
		transform: translateY(-0.5rem);
	}
	transform: ${({ isActive }) => (isActive ? 'translateY(-0.5rem)' : '')};
	box-shadow: ${({ isActive }) =>
		isActive ? '0 3rem 3rem -1.25rem rgba(10, 10, 10, 0.1)' : ''};
	& > figcaption {
		background: ${({ isActive }) => (isActive ? 'rgba(0, 0, 0, 0.6)' : '')};
		opacity: ${({ isActive }) => (isActive ? 1 : '')};
	}
`

const ServiceItem = props => {
	const {
		item: {
			node: {
				frontmatter: { title, sub_items, image, category },
				childImageSharp: { sizes },
			},
		},
		isActive,
	} = props
	return (
		<RaisedCard className="card">
			<div className="card-image">
				<HoverableFigure
					alt={title}
					sizes={sizes}
					className="image"
					isActive={isActive}
				>
					{sub_items.map(i => (
						<span key={i}>
							<MdDone style={{ marginRight: '0.5em' }} />
							{i}
						</span>
					))}
				</HoverableFigure>
			</div>
			<div className="card-footer">
				<div className="card-footer-item">
					<h3>{title}</h3>
				</div>
			</div>
		</RaisedCard>
	)
}

export default ServiceItem
