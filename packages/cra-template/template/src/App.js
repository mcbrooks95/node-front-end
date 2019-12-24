import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import EditBook from './EditBook';

var url = 'https://limitless-springs-00633.herokuapp.com/books';

// source code = https://www.youtube.com/watch?v=oQnojIyTXb8

export class App extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios
      .get(`https://limitless-springs-00633.herokuapp.com/books`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      });
  }

  render() {
    return (
      <div>
        <EditBook
            author={"testauthor"}
            title={"testtitle"}
            numberPages={3}
            publisher={"testPublisher"}
            // title: this.props.title ?? null,
            // author: this.props.author ?? null,
            // numberPages: this.props.numberPages ?? null,
            // publisher: this.props.publisher ?? null,
        />
        <table 
        // style={{ width: '50%' }}
        >
          <tr>
            <th>title</th>
            <th>author</th>
            <th>numberPages</th>
            <th>publisher</th>
          </tr>
          {this.state.persons.map(person => (
            <tr>
              <td>{person.title}</td>
              <td>{person.author}</td>
              <td>{person.numberPages}</td>
              <td>{person.publisher}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default App;
