import React from 'react'
import ServiceItem from './ServiceItem'
import { Transition, animated, config } from 'react-spring'

const ServiceList = ({ items, isFiltered }) => {
	return (
		<div className="columns is-multiline">
			<Transition
				native
				items={items}
				keys={item => item.node.id}
				from={{ opacity: 0, padding: 0 }}
				enter={{ opacity: 1, padding: '0.75rem' }}
				update={{ opacity: 1, padding: '0.75rem' }}
				leave={{ opacity: 0, width: 0, padding: 0 }}
				config={{ tension: 200, friction: 20 }}
			>
				{items.map(item => styles => (
					<animated.div className="column is-one-third" style={styles}>
						<ServiceItem item={item} isActive={isFiltered} />
					</animated.div>
				))}
			</Transition>
		</div>
	)
}

export default ServiceList
