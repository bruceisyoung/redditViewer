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
			subreddits: [], //use tuple to represent subreddits, such as [[title0, url0], [title1, url1], [title2, url2],...]
			submissions: []
		}
	}

	//method: when the add / delete button is clicked, reset the subreddits state and render
	addOrDelSubreddit(isAdd, title) {
		var currentSubreddits = this.state.subreddits;
		var index;

		if (isAdd) {
			currentSubreddits.push(title);
		} else {
			for (var i = 0; i < this.state.subreddits.length; i++) {
				if (this.state.subreddits[i][0] === title) {
					index = i;
					break;
				}
			}
			currentSubreddits.splice(index, 1);
		}

		this.setState({subreddits: currentSubreddits});

		// update the submissions(article) according to current subreddits;
		this.updateSubmissions();
	}

	// method to update submission: 
	updateSubmissions() {
		// if subreddits state is empty, get the hot articles
		if (this.state.subreddits.length === 0) {
			r.getHot()
				.then(post => this.setState({submissions: post}));
		} else {
		// or else  retrieve all the articles and display them when all the titles are downloaded
			var submissionsPool = [];
			
			for (var subreddit of this.state.subreddits) {
				r._get({uri: subreddit[1]})
					.then((res) => {
						submissionsPool = submissionsPool.concat(res);
						this.setState({submissions: submissionsPool});
					});
			}			
		}
	}

	componentWillMount() {
		this.updateSubmissions();
	}

  render() {
    return (
    	<div id='container'>
	    	<div id='listOfAdded'>
	    		{
	    			this.state.subreddits.map(subreddit => <button>{subreddit[0]}</button>)
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