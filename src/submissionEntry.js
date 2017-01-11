//SubmissionEntry component
import React, { Component } from 'react' 

export default class SubmissionEntry extends Component{
  constructor(props) {
  	super(props);
  }

  render() {
  	return (
  		<p><a href={this.props.href} >{this.props.title}</a></p>
  	);
  }
}