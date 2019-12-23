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
        console.log(`about to print res.data`);
        console.log(res.data);

        res.data.forEach((item, index) => {
          console.log('item.title = ');
          console.log(item.title);
          console.log('item.author = ');
          console.log(item.author);
          console.log('item.numberPages = ');
          console.log(item.numberPages);
          console.log('item.publisher = ');
          console.log(item.publisher);
        });

        const persons = res.data;
        this.setState({ persons });
      });
  }

  render() {
    return (
      // <ul>
      //   {this.state.persons.map(person => (

      //     <li>{person.title}</li>
      //     // <li>{person.author}</li>
      //   ))}
      // </ul>
      <table style={{ width: '100%' }}>
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
        {/* <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr> */}
      </table>
    );
  }
}

export default App;
