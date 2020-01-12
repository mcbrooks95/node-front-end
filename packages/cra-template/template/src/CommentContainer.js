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
import Post from './Post';
import HomeNav from './HomeNav';

export class CommentContainer extends React.Component {
  // state = {
  //   content: null,
  //   postId: null,
  //   replyingToCommentId: null,
  //   contactPosterId: null,
  //   upvotes: null,
  //   downvotes: null,
  //   datePosted: null,
  // };

  render() {
    return (
      <div>
        {'#' + this.props.commentNumber}
        {` `}
        {this.props.content}
      </div>
    );
  }
}

export default CommentContainer;
