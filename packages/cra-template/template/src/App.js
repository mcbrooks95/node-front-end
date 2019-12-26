import React from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';
import EditBook from './EditBook';

// var url = 'https://limitless-springs-00633.herokuapp.com/books';

// source code = https://www.youtube.com/watch?v=oQnojIyTXb8

export class App extends React.Component {
  state = {
    persons: [],
    personBeingEdited: null,
  };

  componentDidMount() {
    axios
      .get(`https://limitless-springs-00633.herokuapp.com/books`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      });
  }

  handleEdit = person => {
    console.log('in handle edit and person is ' + person);
    this.setState({ personBeingEdited: person });
  };

  handleCancel = () => {
    console.log('cancel is handled');
    this.setState({ personBeingEdited: null });
  };

  refreshData = () => {
    console.log('refreshData called');
    axios
      .get(`https://limitless-springs-00633.herokuapp.com/books`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
      .then(() => {
        this.setState({ personBeingEdited: null });
      });
  };

  render() {
    return (
      <div>
        {this.state.personBeingEdited ? (
          <EditBook
            id={this.state.personBeingEdited._id}
            author={this.state.personBeingEdited.author}
            title={this.state.personBeingEdited.title}
            numberPages={this.state.personBeingEdited.numberPages}
            publisher={this.state.personBeingEdited.publisher}
            cancelButtonCallBack={() => this.handleCancel()}
            refreshData={() => this.refreshData()}
            // author={"testauthor"}
            // title={"testtitle"}
            // numberPages={3}
            // publisher={"testPublisher"}

            // title: this.props.title ?? null,
            // author: this.props.author ?? null,
            // numberPages: this.props.numberPages ?? null,
            // publisher: this.props.publisher ?? null,
          />
        ) : null}
        <table
        // style={{ width: '50%' }}
        >
          <tbody>
            <tr key="thing1">
              <th>title</th>
              <th>author</th>
              <th>numberPages</th>
              <th>publisher</th>
              <th>Edit Button</th>
            </tr>
            {this.state.persons.map(person => (
              <tr key={person._id}>
                <td key={'title'}>{person.title}</td>
                <td key={'author'}>{person.author}</td>
                <td key={'numberPages'}>{person.numberPages}</td>
                <td key={'publisher'}>{person.publisher}</td>
                <td
                  key={'button'}
                  style={{
                    display: this.state.personBeingEdited ? 'none' : 'initial',
                  }}
                >
                  <button type="button" onClick={() => this.handleEdit(person)}>
                    asdf
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
