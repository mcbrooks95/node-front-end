import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

var url = 'https://limitless-springs-00633.herokuapp.com/books';

// source code = https://www.youtube.com/watch?v=oQnojIyTXb8

export class EditBook extends React.Component {
  state = {
    title: null,
    author: null,
    numberPages: null,
    publisher: null,
    isAddValid: false
  };

  componentDidMount() {
    axios
      .get(`https://limitless-springs-00633.herokuapp.com/books`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      });
  }

  isTitleValid = () => {
      return this.state.title && typeof this.state.title === 'string' && this.state.title.length > 0;
  }

  isAuthorValid = () => {
    return this.state.author && typeof this.state.author === 'string' && this.state.author.length > 0;
  }

  isNumberPagesValid = () => {
    return this.state.numberPages && typeof parseInt(this.state.numberPages) === 'number'
             && parseInt(this.state.numberPages) > 0;
  }

  isPublisherValid = () => {
      return this.state.publisher && typeof this.state.publisher === 'string' && this.state.publisher.length > 0;
  }

  isEventTargetValid = (value, type) => {
      return value 
      && 

      (type == "string" ? 
      typeof value === 'string'
       : typeof parseInt(value) === "number")

       && value.length > 0
  }

  handleChangeTitle = event => {
    this.setState({ title: event.target.value });
    if( 
        this.isAuthorValid()
        && this.isNumberPagesValid()
        && this.isPublisherValid()
        && this.isEventTargetValid(event.target.value, "string")
    )
    {
        this.setState({ isAddValid: true });
    }
  }
  handleChangeAuthor = event => {
    this.setState({ author: event.target.value });
    if( 
        this.isTitleValid()
        && this.isNumberPagesValid()
        && this.isPublisherValid()
        && this.isEventTargetValid(event.target.value, "string")
    )
    {
        this.setState({ isAddValid: true });
    }
  }
  handleChangeNumberPages = event => {
    this.setState({ numberPages: parseInt(event.target.value) });
    if( 
        this.isTitleValid()
        && this.isAuthorValid()
        && this.isPublisherValid()
        && this.isEventTargetValid(event.target.value, "number")
    )
    {
        this.setState({ isAddValid: true });
    }
  }
  handleChangePublisher = event => {
    this.setState({ publisher: event.target.value });
    if( 
        this.isTitleValid()
        && this.isAuthorValid()
        && this.isNumberPagesValid()
        && this.isEventTargetValid(event.target.value, "string")
    )
    {
        this.setState({ isAddValid: true });
    }

  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      title: this.state.title,
      author: this.state.author,
      numberPages: this.state.numberPages,
      publisher: this.state.publisher
    }

    axios.put("https://limitless-springs-00633.herokuapp.com/book/5dec1fa2655c3e3accfe4803", user)
    .then((res) => {
        console.log(res)
        console.log(res.data)
    })
    .catch(error => {
        console.log("we are in error state")
        console.log(error)
    });

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Person Name:
          <input type="text" name="title" onChange={this.handleChangeTitle} />
          <input type="text" name="author" onChange={this.handleChangeAuthor} />
          <input type="text" name="numberPages" onChange={this.handleChangeNumberPages} />
          <input type="text" name="publisher" onChange={this.handleChangePublisher} />
        </label>
        <button type="submit" data-isAddValid={this.state.isAddValid} style={{
          
          pointerEvents: (this.state.isAddValid ? "initial" : "none"),
          color: (this.state.isAddValid ? "black" : "gray")
          
          }}>Add</button>
      </form>
    );
  }
}

export default EditBook;
