import React from 'react'
import Header from '../components/Header'
import Link from 'gatsby-link'
const SuccessPage = () => (
	<div>
		<Header />
		<div className="hero is-large">
			<div className="hero-body has-text-centered">
				<div className="container">
					<div className="title is-1">Thank you</div>
					<Link to="/" className="button is-primary">
						返回主页
					</Link>
				</div>
			</div>
		</div>
	</div>
)

export default SuccessPage
