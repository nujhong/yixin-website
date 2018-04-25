import _ from 'lodash'
import React, { Component } from 'react'
import {
	Button,
	Columns,
	Column,
	Content,
	Breadcrumb,
	BreadcrumbItem,
	Title,
	Subtitle,
} from 'bloomer'
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

	handleClick = index => {
		this.setState((state, props) => ({
			items: props.data.edges[index].node.frontmatter.services,
		}))
	}

	render() {
		const { edges: categories } = this.props.data
		return (
			<div>
				<div className="section has-background-white-bis">
					<div className="container">
						<Title hasTextAlign="centered" isSize={2}>
							我们的服务范围
						</Title>
						<Columns>
							{categories.map(
								(
									{
										node: {
											frontmatter: { category, services, tags },
										},
									},
									index
								) => (
									<Column isSize="1/2">
										<Animation className="wow fadeIn" data-wow-offset="10">
											<Figure
												alt=""
												src="https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
											>
												<Block hasTextAlign="centered">
													<Title hasTextColor="white">{category}</Title>
													<Breadcrumb isSize="medium">
														<ul>
															{tags.map(tag => (
																<BreadcrumbItem>
																	<a className="has-text-white">{tag}</a>
																</BreadcrumbItem>
															))}
														</ul>
													</Breadcrumb>
													<Button
														isColor="white"
														isOutlined
														onClick={() => this.handleClick(index)}
													>
														展开
													</Button>
												</Block>
											</Figure>
										</Animation>
									</Column>
								)
							)}
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
