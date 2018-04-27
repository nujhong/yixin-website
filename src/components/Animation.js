import React, { Component } from 'react'

class Animation extends Component {
	render() {
		return <div {...this.props}>{this.props.children}</div>
	}
}

export default Animation
