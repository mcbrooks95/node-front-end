import React from 'react';
import axios from 'axios';
import './App.css';

export class Post extends React.Component {
  state = {
    title: 'Test Title',
    category: 'Interesting',
    datePosted: '09-20-2019',
    contentPosterId: 1,
    upvoteAmount: 5,
    comments: [],
    contactPosterUserName: 'dude499',
    postId: 12,
  };

  render() {
    return (
      <div>
        <h4>
          <a>{this.state.title}</a>
        </h4>{' '}
        by {this.state.contactPosterUserName} on {this.state.datePosted}
      </div>
    );
  }
}

export default Post;
