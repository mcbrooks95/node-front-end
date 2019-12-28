import React from 'react';
// import axios from 'axios';
import './App.css';
import { faHome, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Post extends React.Component {
  state = {
    title: this.props.title,
    category: this.props.category,
    datePosted: this.props.datePosted,
    contentPosterId: this.props.contentPosterId,
    upvoteAmount: this.props.upvoteAmount,
    comments: this.props.comments,
    contactPosterUserName: this.props.contactPosterUserName,
    postId: this.props.postId
  };

  render() {
    return (
      <div style={{paddingLeft: "30%"}}>
        <div class="row post">
          <div class="col-xl-2">
            <a href="#" style={{color: "black"}}><FontAwesomeIcon icon={faArrowUp} /></a>
            <div className="upvoteAmount">{this.state.upvoteAmount}</div>
            <a href="#" style={{color: "black"}}><FontAwesomeIcon icon={faArrowDown} /></a>
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
      </div>
    );
  }
}

export default Post;
