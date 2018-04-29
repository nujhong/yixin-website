import React, { Component } from 'react'
import axios from 'axios'
import FileUploader from './FileUploader'
import { navigateTo } from 'gatsby-link'

import {
	Progress,
	Content,
	Image,
	Columns,
	Column,
	Box,
	Modal,
	ModalBackground,
	ModalClose,
	ModalContent,
} from 'bloomer'

class ContactForm extends Component {
	constructor(props) {
		super(props)
		this.state = { attachments: [], name: '' }
	}

	handleDrop = files => {
		this.setState(prevState => ({
			attachments: [...prevState.attachments, ...files],
		}))
	}

	handleChange = e => {
		this.setState({ name: e.target.value })
	}

	handleSubmit = e => {
		e.preventDefault()
		const uploaders = this.state.attachments.map(file => {
			const formData = new FormData()
			formData.append('file', file)
			formData.append('tags', `yixin, ${this.state.name}`)
			formData.append('upload_preset', 'mb4aputh')
			formData.append('api_key', '958773721551147')
			formData.append('timestamp', (Date.now() / 1000) | 0)
			return axios
				.post(
					'https://api.cloudinary.com/v1_1/dx2sdr8wg/image/upload',
					formData,
					{
						headers: { 'X-Requested-With': 'XMLHttpRequest' },
					}
				)
				.then(response => response.data)
		})

		axios.all(uploaders).then(data => {
			console.log(data)
			navigateTo('/success')
		})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="field is-horizontal">
					<div className="field-label is-normal">
						<label className="label">名字</label>
					</div>
					<div className="field-body">
						<div className="field">
							<div className="control">
								<input
									className="input"
									type="text"
									placeholder="Normal sized input"
									value={this.state.name}
									onChange={this.handleChange}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="field is-horizontal">
					<div className="field-label is-normal">
						<label className="label">联系方式</label>
					</div>
					<div className="field-body">
						<div className="field">
							<div className="control">
								<input
									className="input"
									type="email"
									placeholder="e.g. alexsmith@gmail.com"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="field is-horizontal">
					<div className="field-label is-normal">
						<label className="label">附件</label>
					</div>
					<div className="field-body">
						<div className="field">
							<div className="control">
								<FileUploader
									handleDrop={this.handleDrop}
									files={this.state.attachments}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="field is-horizontal">
					<div className="field-label" />
					<div className="field-body">
						<div className="field is-grouped">
							<div className="control">
								<button className="button is-primary">提交</button>
							</div>
							<div className="control">
								<Progress isColor="primary" value={30} max={100} />
							</div>
						</div>
					</div>
				</div>
			</form>
		)
	}
}

export default ContactForm
