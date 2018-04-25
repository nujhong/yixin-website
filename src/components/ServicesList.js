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
import styled from 'styled-components'
import { Transition, config } from 'react-spring'
import Figure from './Figure'
import Block from './Block'

const StyledTitle = styled(Title)`
	box-shadow: -1px -1px 0 1px #505050;
	padding: 5%;
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
					<Card style={{ styles }}>
						<CardImage>
							<Figure src={item.image} isHoverable>
								{item.sub_items.map(i => <span>{i}</span>)}
							</Figure>
						</CardImage>
						<CardFooter>
							<CardFooterItem>{item.title}</CardFooterItem>
						</CardFooter>
					</Card>
				</Column>
			))}
		</Transition>
	</Columns>
)

export default ServicesList
