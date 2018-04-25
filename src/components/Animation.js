import React, { Component } from 'react'
import 'animate.css/animate.css'

class Animation extends Component {
	render() {
		return <div {...this.props}>{this.props.children}</div>
	}
}

export default Animation
