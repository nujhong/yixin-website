import _ from 'lodash'
import React, { Component } from 'react'
import Img from 'gatsby-image'
import ServiceList from '../ServiceList'
import Figure from '../Figure'
import MdUnfoldMore from 'react-icons/lib/md/unfold-more'
import MdUnfoldLess from 'react-icons/lib/md/unfold-less'
import classNames from 'classnames'

const ViewButton = ({ category, handleClick, isFiltered }) => (
	<a
		className={classNames(
			'button',
			'is-white',
			'is-radiusless',
			isFiltered ? 'is-hovered' : 'is-outlined'
		)}
		href="#具体项目"
		aria-label="查看更多"
		onClick={handleClick}
	>
		{isFiltered ? <MdUnfoldLess /> : <MdUnfoldMore />}查看详情
	</a>
)

// TODO: Improve logic to handle filters
const initialState = { 0: false, 1: false }

class Services extends Component {
	constructor(props) {
		super(props)
		this.items = _.flatMap(props.data.edges)

		this.state = {
			filters: initialState,
			items: this.items,
		}
	}

	handleFilter = index => {
		this.setState(prevState => {
			let filters = {
				...initialState,
				[index]: prevState.filters[index] ? false : true,
			}
			return {
				filters,
				items: _.filter(
					this.items,
					item => filters[item.node.frontmatter.category]
				),
			}
		})
	}

	handleClear = () => {
		this.setState({
			filters: initialState,
			items: this.items,
		})
	}

	handleClick = index => {
		this.state.filters[index] ? this.handleClear() : this.handleFilter(index)
	}

	render() {
		const { items, filters } = this.state
		const {
			frontmatter: { Services_title, categories },
		} = this.props

		const isFiltered = _.find(filters, category => category === true)
		return (
			<div>
				<div className="section has-background-white-bis">
					<div className="container">
						<div className="title is-2 has-text-centered">{Services_title}</div>
						<div className="columns">
							{categories.map(({ name, image, tags }, index) => (
								<div className="column is-half" key={name} id={name}>
									<Figure
										alt={name}
										src={image}
										className="image is-4by3"
										isActive
									>
										<h2 className="title has-text-white">{name}</h2>
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
											isFiltered={filters[index]}
											handleClick={() => this.handleClick(index)}
										/>
									</Figure>
								</div>
							))}
						</div>
					</div>
				</div>

				<div id="具体项目" className="section has-background-light">
					<div className="container">
						<ServiceList items={items} isFiltered={isFiltered} />
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
