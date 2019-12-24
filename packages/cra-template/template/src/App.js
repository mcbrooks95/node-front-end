import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

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

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      title: "cors title",
      author: "this.state.name",
      numberPages: 3432,
      publisher: "test publisher"
    }

    axios.put("https://limitless-springs-00633.herokuapp.com/book/5dec1fa2655c3e3accfe4803", user)
    .then((res) => {
        console.log(res)
        console.log(res.data)
    })

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Person Name:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>




      // <table style={{ width: '100%' }}>
      //   <tr>
      //     <th>title</th>
      //     <th>author</th>
      //     <th>numberPages</th>
      //     <th>publisher</th>
      //   </tr>
      //   {this.state.persons.map(person => (
      //     <tr>
      //       <td>{person.title}</td>
      //       <td>{person.author}</td>
      //       <td>{person.numberPages}</td>
      //       <td>{person.publisher}</td>
      //     </tr>
      //   ))}
      // </table>




    );
  }
}

export default App;
