import React, { Component } from 'react';
import snoowrap from 'snoowrap'

import SubmissionList from './submissionList';
import SubredditsList from './subredditsList';

window.r = new snoowrap({
  userAgent: 'chrome-dev-bruceisyoung',
  clientId: '2mDqMUu3-Uf8HQ',
  clientSecret: '5iY-hxx-fRAudzyRyyXpIoEOGas',
  username: 'bruceisyoung',
  password: '123456'
});

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			subreddits: [],
			submissions: []
		}
	}

	setRootState(attr, value) {
		switch(attr) {
			case 'subreddits':
			  this.setState({subreddits: value});
			  break;
			case 'submissions': 
				this.setState({submissions: value});
		}
	}

	componentWillMount() {
		var url;
		
		if (this.state.subreddits.length === 0) {
			r.getHot()
				.then(post => this.setRootState('submissions', post));
		} else {
			console.log('it\'s not empty');
		}
	}

  render() {
    return (
    	<div className='row'>
    		<div className='col-md-9'>
    			<SubmissionList list={this.state.submissions} setRootState={this.setRootState.bind(this)}/>
    		</div>
    		<div className='col-md-3'>
    			<SubredditsList list={this.state.subreddits} setRootState={this.setRootState.bind(this)}/>
    		</div>
    	</div>
    );
  }
}