import React, { Component } from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

class ContactPage extends Component {
	constructor(props) {
		super(props)
		this.state = { showMessage: true }
	}

	handleClose = e => {
		this.setState({ showMessage: false })
	}

	render() {
		const message = (
			<article className="message is-primary">
				<div className="message-header">
					<p />
					<button
						class="delete"
						aria-label="delete"
						onClick={this.handleClose}
					/>
				</div>
				<div className="message-body">
					为了让我们更快的提供报价，您可以上传一些与工程有关的图片来帮助我们
				</div>
			</article>
		)

		return (
			<div>
				<Header />
				<div className="hero is-light is-bold">
					<div className="hero-body">
						<div className="container">
							<div className="columns">
								<div className="column is-4">
									{this.state.showMessage && message}
								</div>
								<div className="column is-8">
									<div className="box">
										<ContactForm />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ContactPage
