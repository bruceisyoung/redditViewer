//subredditsList component
import React, { Component } from 'react';

import SubredditsEntry from './subredditsEntry';

export default class SubredditsList extends Component{
  constructor(props) {
  	super(props);
    this.state = {
      subreddits: []
    }
  }

  componentWillMount() {
    if (this.state.subreddits.length === 0) {
      r._get({uri: '/subreddits/popular'})
        .then(res => this.setState({subreddits: res}));
    }
  }

  render() {
  	return (
  		<div>
        <p>Popular SubReddits List: </p>
        {
          this.state.subreddits.map(subreddit => 
            <SubredditsEntry imgSrc={subreddit['icon_img']} title={subreddit.title} url={subreddit.url} addOrDel={this.props.addOrDel}/>)
        }
  		</div>
  	);
  }
}