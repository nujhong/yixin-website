import _ from 'lodash'
import React, { Component } from 'react'
import { Columns, Column, Content } from 'bloomer'
import ServiceList from '../ServiceList'
import Figure from '../Figure'
import Block from '../Block'
import MdUnfoldMore from 'react-icons/lib/md/unfold-more'
import MdUnfoldLess from 'react-icons/lib/md/unfold-less'
import classNames from 'classnames'

const ViewButton = ({ category, handleClick, isToggled }) => (
	<a
		className={classNames(
			'button',
			'is-white',
			'is-radiusless',
			{ 'is-outlined': !isToggled },
			{ 'is-hovered': isToggled }
		)}
		href="#具体项目"
		aria-label="查看更多"
		onClick={handleClick}
	>
		{isToggled ? <MdUnfoldLess /> : <MdUnfoldMore />}查看详情
	</a>
)

// TODO: Improve logic to handle filters
const initialState = { 0: false, 1: false }

class Services extends Component {
	constructor(props) {
		super(props)
		this.id = _.times(props.data.edges.length, _.uniqueId)
		this.state = {
			isToggled: initialState,
			items: _.flatMap(props.data.edges, edge => edge.node.frontmatter),
		}
	}

	handleClick = index => {
		this.setState(prevState => {
			let isToggled = {
				...initialState,
				[index]: prevState.isToggled[index] ? false : true,
			}
			return {
				isToggled,
				items: _.reduce(
					prevState.items,
					(result, value, key) => {
						result.push({
							...value,
							isActive: isToggled[value.category],
						})
						return result
					},
					[]
				),
			}
		})
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
							{categories.map(({ name, image, tags }, index) => (
								<Column isSize="1/2" key={name} id={name}>
									<Figure
										alt={name}
										src={image}
										className="image is-4by3"
										isActive
									>
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
										<ViewButton
											isToggled={this.state.isToggled[index]}
											handleClick={() => this.handleClick(index)}
										/>
									</Figure>
								</Column>
							))}
						</Columns>
					</div>
				</div>

				<div id="具体项目" className="section has-background-light">
					<div className="container">
						<ServiceList items={this.state.items} />
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
