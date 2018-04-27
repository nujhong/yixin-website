import _ from 'lodash'
import React, { Component } from 'react'
import { Columns, Column, Content } from 'bloomer'
import ServicesList from '../ServicesList'
import Figure from '../Figure'
import Block from '../Block'
import Animation from '../Animation'
import MdUnfoldMore from 'react-icons/lib/md/unfold-more'
import MdUnfoldLess from 'react-icons/lib/md/unfold-less'

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

class Services extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isToggled: {
				0: false,
				1: false,
			},
			items: _.flatMap(props.data.edges, edge => edge.node.frontmatter),
		}
	}

	handleClick = index => {
		this.setState(prevState => ({
			isToggled: {
				...prevState.isToggled,
				[index]: !prevState.isToggled[index],
			},
		}))
	}

	render() {
		const {
			frontmatter: { Services_title, categories },
		} = this.props

		return (
			<div>
				<div className="section has-background-white-bis">
					<div className="container">
						<div className="title is-2 has-text-centered">{Services_title}</div>
						<Columns>
							{categories.map(({ name, image, tags }) => (
								<Column isSize="1/2" key={name} id={name}>
									<Animation className="wow fadeIn" data-wow-offset="10">
										<Figure alt={name} src={image}>
											<Block hasTextAlign="centered">
												<div className="title has-text-white">{name}</div>
												<nav
													className="breadcrumb is-medium"
													aria-label="breadcrumbs"
												>
													<ul>
														{tags.map(tag => (
															<li key={tag} className="breadcrumb-item">
																<a className="has-text-white">{tag}</a>
															</li>
														))}
													</ul>
												</nav>
												<ViewButton />
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

export default Services

export const query = graphql`
	fragment ServicesFragment on MarkdownRemark {
		frontmatter {
			Services_title
			categories {
				image
				name
				tags
			}
		}
	}
`
