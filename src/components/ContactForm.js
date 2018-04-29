import React, { Component } from 'react'
import axios from 'axios'
import FileUploader from './FileUploader'
import { navigateTo } from 'gatsby-link'
import { Progress } from 'bloomer'
import uuidv4 from 'uuid/v4'

class ContactForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			attachments: [],
			name: '',
			isSubmitting: false,
			operationId: uudidv4(),
		}
	}

	handleDelete = (index, e) => {
		e.preventDefault()
		this.setState(prevState => ({
			attachments: prevState.attachments.filter(
				item => item !== prevState.attachments[index]
			),
		}))
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

		this.setState({ isSubmitting: true })
		const uploaders = this.state.attachments.map(file => {
			const formData = new FormData()
			formData.append('file', file)
			formData.append('tags', `yixin, ${this.state.name}`)
			formData.append('upload_preset', 'mb4aputh')
			formData.append('folder', this.state.operationId)
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
		const { name, attachments, isSubmitting, operationId } = this.state
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
									placeholder="我们对您的称呼"
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
									placeholder="可通过微信联系我们或者留下您的邮箱/电话号码"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="field is-horizontal">
					<div className="field-label is-normal">
						<label className="label">描述</label>
					</div>
					<div className="field-body">
						<div className="field">
							<div className="control">
								<textarea
									className="textarea"
									type="text"
									placeholder="具体描述，材料，面积等要求"
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
									handleDelete={this.handleDelete}
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
						<div className="field">
							<div className="control">
								<button
									className={`button is-primary is-medium ${
										isSubmitting ? 'is-loading' : ''
									}`}
								>
									提交
								</button>
							</div>
						</div>
					</div>
				</div>
				<input
					type="hidden"
					name="url"
					value={
						`https://cloudinary.com/console/media_library/folders/images/` +
						this.state.operationId
					}
				/>
			</form>
		)
	}
}

export default ContactForm
