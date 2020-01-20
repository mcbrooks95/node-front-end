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
      value: '',
      value2: '',
      value3: 'interesting',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleChange2(event) {
    console.log('in handleChange2 event');
    this.setState({ value2: event.target.value });
  }
  handleChange3(event) {
    console.log('in handleChange3 event');
    this.setState({ value3: event.target.value });
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);

    axios
      .post('https://limitless-springs-00633.herokuapp.com/comment', {
        content: this.state.value2,
        postId: this.props.postId,
        replyingToCommentId: '',
        datePosted: Date.now(),
        contactPosterId: this.props.contactPosterId,
        upvotes: [],
        downvotes: [],
      })
      .then(function(response) {
        window.location = window.location;
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
          Title of Post:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          Post Content:
          <input
            type="text"
            value={this.state.value2}
            onChange={this.handleChange2}
          />
        </label>
        <select
          id="lang"
          onChange={this.handleChange3}
          value={this.state.value3}
        >
          <option value="interesting">interesting</option>
          <option value="funny">funny</option>
          <option value="sports">sports</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CommentCreator;
