import React, { Component } from 'react';
import snoowrap from 'snoowrap'

const r = new snoowrap({
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

	componentWillMount() {
		r._get({uri: 'api/v1/me/karma'}).
			then((res) => {
				if (res.length === 0) {
					return r._get({uri: '/hot'});
				} else {
					return false;
				}
			}).
			then(list => console.log('list: ', list));
	}

  render() {
    return (
    	<p>I am building a reddit viewer</p>
    );
  }
}