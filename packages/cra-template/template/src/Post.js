import React from 'react';
// import axios from 'axios';
import './App.css';
import { faHome, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <div class="row post">
        <div class="col-xl-2">
          {this.state.upvoteAmount}
          {/* <i class="fa fa-arrow-down fa-3x"></i> */}
          {/* <i class="fa fa-arrow-up fa-3x"></i> */}
          <a href="#" style={{color: "black"}}><FontAwesomeIcon icon={faArrowUp} /></a>
        </div>
        <div class="col-xl-6">
          <div>
            <a href="https://www.google.com/" style={{ fontSize: '22px' }}>
              {this.state.title}
            </a>
          </div>{' '}
          <div>
            by {this.state.contactPosterUserName} on {this.state.datePosted}
          </div>
          <div>r/{this.state.category}</div>
        </div>
      </div>
    );
  }
}

export default Post;
