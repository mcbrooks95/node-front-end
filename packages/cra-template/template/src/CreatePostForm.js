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

export class CreatePostForm extends React.Component {
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
    alert('A name was submitted: ' + this.state.value);

    axios
      .post('https://limitless-springs-00633.herokuapp.com/post', {
        title: this.state.value,
        category: this.state.value3,
        content: this.state.value2,
        datePosted: Date.now(),
        contactPosterId: this.props.contactPosterId,
        upvotes: [],
        downvotes: [],
        contactPosterUserName: this.props.contactPosterUserName,
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    event.preventDefault();
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
          <option value="select">interesting</option>
          <option value="Java">funny</option>
          <option value="C++">sports</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CreatePostForm;
