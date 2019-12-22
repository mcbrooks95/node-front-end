import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

var url = 'https://limitless-springs-00633.herokuapp.com/books';

export class App extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    // axios.get(`https://jsonplaceholder.typicode.com/users`)
    axios
      .get(`https://limitless-springs-00633.herokuapp.com/books`)
      // axios.get(`http://localhost:5000/books`)
      .then(res => {
        console.log(`about to print res`);
        console.log(res);
        const persons = res.data;
        this.setState({ persons });
      });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map(person => (
          <li>{person.name}</li>
        ))}
      </ul>
    );
  }
}

export default App;
