import React, { Component } from 'react';
import 'animate.css/animate.css';

class Animation extends Component {

  componentDidMount() {
    if (typeof window !== 'undefined') {
      const WOW = require('wowjs');
      new WOW.WOW({
          live: false
      }).init();
    }
  }

  render() {
    return (
      <div {...this.props}>{this.props.children}</div>
    );
  }

}

export default Animation;
