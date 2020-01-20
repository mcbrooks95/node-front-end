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

export class CommentCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      value2: '',
      value3: 'interesting',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('in handleChange2 event');
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);

    axios
      .post('https://limitless-springs-00633.herokuapp.com/comment', {
        content: this.state.comment,
        postId: this.props.postId,
        replyingToCommentId: '',
        datePosted: Date.now(),
        contactPosterId: this.props.contactPosterId,
        upvotes: [],
        downvotes: [],
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    event.preventDefault();
    window.location.reload(false);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Comment:
          <input
            type="text"
            value={this.state.comment}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CommentCreator;
