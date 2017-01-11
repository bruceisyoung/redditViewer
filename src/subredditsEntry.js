import React, { Component } from 'react';

import SubredditsEntry from './subredditsEntry';

export default class SubredditsList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isAdded: false
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className='subredditsEntry'>
        <button>{this.state.isAdded ? 'del' : 'add'}</button>
        <img src={this.props.imgSrc} />
        <span>{this.props.title}</span>
      </div>
    );
  }
}