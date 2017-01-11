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

	addOrDelSubreddit(isAdd, title) {
		var currentSubreddits = this.state.subreddits;

		if (isAdd) {
			currentSubreddits.push(title);
		} else {
			currentSubreddits.splice(currentSubreddits.indexOf(title), 1)
		}

		this.setState({subreddits: currentSubreddits});
	}

	componentWillMount() {
		var url;
		
		if (this.state.subreddits.length === 0) {
			r.getHot()
				.then(post => this.setState({submissions: post}));
		} else {
			console.log('it\'s not empty');
		}
	}

  render() {
    return (
    	<div id='container'>
	    	<div id='listOfAdded'>
	    		{
	    			this.state.subreddits.map(subreddit => <button>{subreddit}</button>)
	    		}
	    	</div>
	    	<div className='row'>
	    		<div className='col-md-3'>
	    			<SubredditsList list={this.state.subreddits} addOrDel={this.addOrDelSubreddit.bind(this)} />
	    		</div>
	    		<div className='col-md-9'>
	    			<SubmissionList list={this.state.submissions} />
	    		</div>
	    	</div>
    	</div>
    );
  }
}