import React, { Component } from 'react';

import SubredditsEntry from './subredditsEntry';

export default class SubredditsList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isAdded: false
    }
  }

  buttonClicked() {
    console.log(this);
    if (this.state.isAdded) {
      this.props.addOrDel(false, this.props.title);
    } else {
      this.props.addOrDel(true, this.props.title);
    }
    this.setState({isAdded: !this.state.isAdded});
  }

  render() {
    return (
      <div className='subredditsEntry'>
        <button onClick={this.buttonClicked.bind(this)}>{this.state.isAdded ? 'del' : 'add'}</button>
        <img src={this.props.imgSrc} />
        <span>{this.props.title}</span>
      </div>
    );
  }
}