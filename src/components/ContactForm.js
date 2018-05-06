import _ from 'lodash'
import React, { Component } from 'react'
import axios from 'axios'
import FileUploader from './FileUploader'
import { navigateTo } from 'gatsby-link'
import classNames from 'classnames'
import uuidv4 from 'uuid/v4'
import Field from './Field'

class ContactForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			attachments: [],
			name: '',
			email: '',
			description: '',
			isLoading: false,
			url: `https://cloudinary.com/console/media_library/folders/images/${uuidv4()}`,
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

	handleInputChange = ({ target: { value, name } }) => {
		this.setState({
			[name]: value,
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		this.setState({ isLoading: true })

		const uploaders = this.state.attachments.map(file => {
			const formData = new FormData()
			formData.append('file', file)
			formData.append('tags', `yixin, ${this.state.name}`)
			formData.append('upload_preset', 'mb4aputh')
			formData.append('folder', this.state.operationId)
			formData.append('api_key', '958773721551147')
			formData.append('timestamp', (Date.now() / 1000) | 0)
			return axios({
				method: 'post',
				url: 'https://api.cloudinary.com/v1_1/dx2sdr8wg/image/upload',
				data: formData,
				config: {
					headers: { 'X-Requested-With': 'XMLHttpRequest' },
				},
			}).then(response => response.data)
		})

		const submitData = _.pick(this.state, [
			'name',
			'email',
			'description',
			'url',
		])

		axios.all(uploaders).then(data => {
			console.log(data)
			axios({
				method: 'post',
				url: '/',
				data: {
					'form-name': 'contact',
					...submitData,
				},
				config: { headers: { 'X-Requested-With': 'XMLHttpRequest' } },
			}).then(() => navigateTo('/success'))
		})
	}

	render() {
		const {
			name,
			email,
			description,
			attachments,
			isLoading,
			operationId,
		} = this.state

		return (
			<form
				onSubmit={this.handleSubmit}
				data-netlify="true"
				data-netlify-honeypot="bot-field"
			>
				<Field
					required
					label="名字"
					type="input"
					field={{
						placeholder: '我们对您的称呼',
						name: 'name',
						type: 'text',
						value: name,
						onChange: this.handleInputChange,
					}}
				/>
				<Field
					required
					label="联系方式"
					type="input"
					field={{
						placeholder: '可通过微信联系我们或者留下您的邮箱/电话号码',
						name: 'email',
						type: 'email',
						value: email,
						onChange: this.handleInputChange,
					}}
				/>

				<Field
					label="描述"
					type="textarea"
					field={{
						placeholder: '具体描述，材料，面积等要求',
						name: 'email',
						value: description,
						onChange: this.handleInputChange,
					}}
				/>

				<Field
					label="附件"
					type="file"
					field={{
						handleDelete: this.handleDelete,
						handleDrop: this.handleDrop,
						files: attachments,
					}}
				/>

				<Field label="" type="button">
					<button
						className={classNames(`button is-primary is-medium is-radiusless`, {
							'is-loading': isLoading,
						})}
					>
						提交
					</button>
				</Field>
			</form>
		)
	}
}

export default ContactForm
