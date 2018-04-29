import React from 'react'
// import { Transition, config } from 'react-spring'
import ServiceItem from './ServiceItem'

// TODO: Add transition effect

const ServiceList = ({ items }) => (
	<div className="columns is-multiline">
		{items.map(item => (
			<div className="column is-one-third">
				<ServiceItem item={item} />
			</div>
		))}
	</div>
)

export default ServiceList
