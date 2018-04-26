import _ from 'lodash'
import React, { Component } from 'react'
import update from 'immutability-helper'
import { Columns, Column, Content } from 'bloomer'
import ServicesList from '../ServicesList'
import Figure from '../Figure'
import Block from '../Block'
import Animation from '../Animation'
import MdUnfoldMore from 'react-icons/lib/md/unfold-more'
import MdUnfoldLess from 'react-icons/lib/md/unfold-less'

class Services extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isToggled: false,
			items: _.flatMap(
				props.data.edges,
				edge => edge.node.frontmatter.services
			),
		}
	}

	handleClick = node => {
		console.log(node)
	}

	render() {
		const { edges: categories } = this.props.data
		return (
			<div>
				<div className="section has-background-white-bis">
					<div className="container">
						<div className="title is-2 has-text-centered">我们的服务范围</div>
						<Columns>
							{categories.map(({ node }) => (
								<Column
									isSize="1/2"
									key={node.id}
									id={node.frontmatter.category}
								>
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
												<ViewButton
													node={node}
													isToggled={this.state.isToggled}
													handleClick={this.handleClick}
												/>
											</Block>
										</Figure>
									</Animation>
								</Column>
							))}
						</Columns>
					</div>
				</div>

				<div id="具体项目" className="section has-background-light">
					<div className="container">
						<ServicesList items={this.state.items} />
					</div>
				</div>
			</div>
		)
	}
}

const ViewButton = ({ node, handleClick, isToggled }) => (
	<a
		className="button is-white is-radiusless is-outlined"
		href="#具体项目"
		aria-label="查看更多"
		onClick={() => handleClick(node)}
	>
		{isToggled ? <MdUnfoldLess /> : <MdUnfoldMore />}查看详情
	</a>
)

export default Services
