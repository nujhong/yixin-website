import React, { Component } from 'react'
import Headroom from 'react-headroom'
import Link from 'gatsby-link'
import ChevronRight from 'react-icons/lib/md/chevron-right'
import logo from '../img/logo.png'

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = { isActive: false }
	}

	handleToggle = () => {
		this.setState({ isActive: !this.state.isActive })
	}

	render() {
		return (
			<Headroom>
				<div className="navbar is-primary">
					<div className="container">
						<div className="navbar-brand">
							<Link to="/" className="navbar-item">
								<img src={logo} alt="易信" height="60" />易信建筑装修
							</Link>
							<div
								className="navbar-burger"
								isActive={this.state.isActive}
								onClick={this.handleToggle}
							/>
						</div>
						<div
							ClassName="navbar-menu"
							isActive={this.state.isActive}
							onClick={this.handleToggle}
						>
							<div className="navbar-end">
								<a href="#室内" aria-label="室内装修" className="navbar-item">
									室内装修
								</a>
								<a href="#户外" aria-label="户外装修" className="navbar-item">
									户外装修
								</a>
								<Link to="/contact" className="navbar-item">
									<div className="button is-white is-outlined is-radiusless">
										<ChevronRight />网上报价
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Headroom>
		)
	}
}

export default Header
