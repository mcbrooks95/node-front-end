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

export class HomeNav extends React.Component {
  componentDidMount() {}

  render() {
    return <a href={'/' + this.props.loggedInUserId}>Home Button</a>;
  }
}

export default HomeNav;
