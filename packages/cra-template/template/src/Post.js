import React from 'react';
// import axios from 'axios';
import './App.css';
import {
  faHome,
  faArrowUp,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

export class Post extends React.Component {
  state = {
    title: this.props.title,
    category: this.props.category,
    datePosted: this.props.datePosted,
    contentPosterId: this.props.contentPosterId,
    // upvoteAmount: this.props.upvoteAmount,
    comments: this.props.comments,
    contactPosterUserName: this.props.contactPosterUserName,
    postId: this.props.postId,

    upvotes: this.props.upvotes,
    downvotes: this.props.downvotes,

    loggedInUserName: this.props.loggedInUserName,
    loggedInUserId: this.props.loggedInUserId,
  };

  downvote = () => {
    // console.log('refreshData called');

    // var postId = `5e06c39ecb42dd26fc548715`
    // var userId = `5e066b482ff4171d3cd2c5de`

    var postId = this.state.postId;
    var userId = this.state.loggedInUserId;
    axios
      .put(
        'https://limitless-springs-00633.herokuapp.com/post/' +
          postId +
          '/downvote/' +
          userId
      )
      .then(res => {
        const upvotes = res.data.upvotes;
        const downvotes = res.data.downvotes;
        this.setState({ downvotes: downvotes });
        this.setState({ upvotes: upvotes });
      });
  };

  render() {
    return (
      <div style={{ paddingLeft: '30%' }}>
        <div class="row post">
          <div class="col-xl-2">
            <a
              href="#"
              // style={{ color: 'black' }}
              className="upvotebutton"
              data-is-upvotes={
                this.state.upvotes.includes(this.state.loggedInUserId)
                  ? '1'
                  : '0'
              }
            >
              <FontAwesomeIcon icon={faArrowUp} />
            </a>

            <div
              className="upvoteAmount"
              data-is-upvotes={
                this.state.upvotes.includes(this.state.loggedInUserId)
                  ? '1'
                  : '0'
              }
              data-is-downvotes={
                this.state.downvotes.includes(this.state.loggedInUserId)
                  ? '1'
                  : '0'
              }
            >
              {this.state.upvotes.length - this.state.downvotes.length}
            </div>

            <a
              href="#"
              // style={{ color: 'black' }}
              className="downvotebutton"
              data-is-downvotes={
                this.state.downvotes.includes(this.state.loggedInUserId)
                  ? '1'
                  : '0'
              }
            >
              <FontAwesomeIcon
                icon={faArrowDown}
                onClick={() => this.downvote()}
              />
            </a>
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
