//submissionList component
import React, { Component } from 'react';

import SubmissionEntry from './submissionentry';

export default class SubmissionList extends Component{
  constructor(props) {
  	super(props);
  }

  render() {
  	return (
  		 <div>
  			{ 
  				this.props.list.map((entry, index) => {
  					var link = 'https://www.reddit.com' + entry.permalink;
  					return <SubmissionEntry href={link} title={entry.title} addOrDel={this.props.addOrDel}/>
  				})
  			}
  		</div>
  	);
  }
}