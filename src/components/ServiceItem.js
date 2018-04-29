import React from 'react'
import styled from 'react-emotion'
import { HoverableFigure } from './Figure'

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

const ServiceItem = ({ item: { title, image, sub_items, isActive } }) => (
	<RaisedCard className="card" isActive={isActive}>
		<div className="card-image">
			<HoverableFigure
				src={image}
				alt={title}
				className="image is-16by9 is-clipped"
				isActive={isActive}
			>
				{sub_items.map(i => <span key={i}>{i}</span>)}
			</HoverableFigure>
		</div>
		<div className="card-footer">
			<div className="card-footer-item">{title}</div>
		</div>
	</RaisedCard>
)

export default ServiceItem
