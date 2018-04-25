import _ from 'lodash'
import React, { Component } from 'react'
import update from 'immutability-helper'
import { Button, Columns, Column, Content } from 'bloomer'
import ServicesList from '../ServicesList'
import Figure from '../Figure'
import Block from '../Block'
import Animation from '../Animation'

class Services extends Component {
	constructor(props) {
		super(props)
		this.state = {
			items: _.flatMap(
				props.data.edges,
				edge => edge.node.frontmatter.services
			),
		}
	}

	handleClick = node => {
		let newNode = _.forEach(node, item => _.merge(item, { isActive: true }))
		console.log(update(node, { $merge: { isActive: true } }))
		console.log(newNode)
	}

	render() {
		console.log(this.state.items)
		const { edges: categories } = this.props.data
		return (
			<div>
				<div className="section has-background-white-bis">
					<div className="container">
						<div className="title is-2 has-text-centered">我们的服务范围</div>
						<Columns>
							{categories.map(({ node }) => (
								<Column isSize="1/2" key={node.id}>
									<Animation className="wow fadeIn" data-wow-offset="10">
										<Figure
											alt=""
											src="https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
										>
											<Block hasTextAlign="centered">
												<div className="title has-text-white">
													{node.frontmatter.category}
												</div>
												<nav
													className="breadcrumb is-medium"
													aria-label="breadcrumbs"
												>
													<ul>
														{node.frontmatter.tags.map(tag => (
															<li key={tag} className="breadcrumb-item">
																<a className="has-text-white">{tag}</a>
															</li>
														))}
													</ul>
												</nav>
												<Button
													isColor="white"
													isOutlined
													onClick={() =>
														this.handleClick(node.frontmatter.services)
													}
												>
													查看详情
												</Button>
											</Block>
										</Figure>
									</Animation>
								</Column>
							))}
						</Columns>
					</div>
				</div>

				<div className="section has-background-light">
					<div className="container">
						<ServicesList items={this.state.items} />
					</div>
				</div>
			</div>
		)
	}
}

export default Services
