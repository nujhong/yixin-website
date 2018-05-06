import React, { Component } from 'react'
import FileUploader from './FileUploader'

class Field extends Component {
	renderControl({ field, type, children }) {
		switch (type) {
			case 'textarea':
				return <textarea className={type} type="text" {...field} />
			case 'file':
				return <FileUploader {...field} />
			case 'button':
				return <div>{children}</div>
			default:
				return <input className={type} type="text" {...field} />
		}
	}
	render() {
		return (
			<div className="field is-horizontal">
				<div className="field-label is-normal">
					<label className="label">{`${this.props.label}${
						this.props.required ? '*' : ''
					}`}</label>
				</div>
				<div className="field-body">
					<div className="field">
						<div className="control">{this.renderControl(this.props)}</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Field
