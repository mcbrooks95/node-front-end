import React from 'react';
// import axios from 'axios';
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
      <div class="row">
        <div class="col-md-3">{this.state.upvoteAmount}</div>
          <div class="col-md-3">
            <div>
              <a href="https://www.google.com/" style={{fontSize: "22px"}}>{this.state.title}</a>
            </div>{' '}
            by {this.state.contactPosterUserName} on {this.state.datePosted}
          </div>
      </div>
    );
  }
}

export default Post;
