import React, { Component } from 'react'
import Headroom from 'react-headroom'
import Link from 'gatsby-link'
import ChevronRight from 'react-icons/lib/md/chevron-right'

import {
	Container,
	Navbar,
	NavbarBrand,
	NavbarBurger,
	NavbarItem,
	NavbarMenu,
	NavbarStart,
	NavbarLink,
	NavbarEnd,
} from 'bloomer'

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
				<Navbar className="is-primary">
					<Container>
						<NavbarBrand>
							<Link to="/" className="navbar-item">
								易信
							</Link>
							<NavbarBurger
								isActive={this.state.isActive}
								onClick={this.handleToggle}
							/>
						</NavbarBrand>
						<NavbarMenu
							isActive={this.state.isActive}
							onClick={this.handleToggle}
						>
							<NavbarEnd>
								<a href="/#室内" aria-label="室内装修" className="navbar-item">
									室内装修
								</a>
								<a href="/#户外" aria-label="户外装修" className="navbar-item">
									户外装修
								</a>
								<Link to="/contact" className="navbar-item">
									<div className="button is-white is-outlined is-radiusless">
										<ChevronRight />网上报价
									</div>
								</Link>
							</NavbarEnd>
						</NavbarMenu>
					</Container>
				</Navbar>
			</Headroom>
		)
	}
}

export default Header
