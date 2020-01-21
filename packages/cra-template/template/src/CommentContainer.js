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
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      value2: '',
      value3: 'interesting',
    };

    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(event) {
    // alert('A name was submitted: ' + this.state.value);

    axios
      .delete(
        'https://limitless-springs-00633.herokuapp.com/comment/' +
          this.props.commentId,
        {}
      )
      .then(function(response) {
        console.log(response);
      })

      .then(function(response) {
        //code came from:
        //https://javascript.info/async-await
        async function f() {
          let promise = new Promise((resolve, reject) => {
            setTimeout(() => window.location.reload(false), 1000);
          });

          let result = await promise; // wait until the promise resolves (*)
        }

        f();
      })
      .catch(function(error) {
        console.log(error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div>
          {'#' + this.props.commentNumber}
          {` `}
          {this.props.content}
        </div>
        <a href="#" onClick={this.handleDelete}>
          Delete Button
        </a>
        <div>......</div>
        <div>......</div>
        <div>......</div>
        <div>......</div>
      </div>
    );
  }
}

export default CommentContainer;
