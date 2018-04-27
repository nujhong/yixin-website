import React from 'react'
import {
	Box,
	Card,
	CardImage,
	CardFooter,
	CardFooterItem,
	Image,
	Columns,
	Column,
	Title,
} from 'bloomer'
import styled from 'react-emotion'
import { Transition, config } from 'react-spring'
import Figure from './Figure'
import Block from './Block'

const RaisedCard = styled(Card)`
	transition-duration: 86ms;
	transition-property: box-shadow, transform;
	will-change: box-shadow, transform;
	&:hover {
		box-shadow: 0 3rem 3rem -1.25rem rgba(10, 10, 10, 0.1);
		transform: translateY(-0.5rem);
	}
`

const ServicesList = ({ items }) => (
	<Columns isMultiline>
		<Transition
			from={{ opacity: 0 }}
			to={{ opacity: 1 }}
			leave={{ opacity: 0 }}
			keys={items.map(item => item.title)}
		>
			{items.map((item, index) => styles => (
				<Column isSize="1/3">
					<RaisedCard style={{ styles }}>
						<CardImage>
							<Figure src={item.image} isHoverable>
								{item.sub_items.map(i => <span key={i}>{i}</span>)}
							</Figure>
						</CardImage>
						<CardFooter>
							<CardFooterItem>{item.title}</CardFooterItem>
						</CardFooter>
					</RaisedCard>
				</Column>
			))}
		</Transition>
	</Columns>
)

export default ServicesList
