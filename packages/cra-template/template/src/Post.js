import React from 'react';
import axios from 'axios';
import './App.css';

export class Post extends React.Component {
  state = {
    title: this.props.title ?? null,
    author: this.props.author ?? null,
    numberPages: this.props.numberPages ?? null,
    publisher: this.props.publisher ?? null,
    isAddValid: false,
  };

  isTitleValid = () => {
    return (
      this.state.title &&
      typeof this.state.title === 'string' &&
      this.state.title.length > 0
    );
  };

  isAuthorValid = () => {
    return (
      this.state.author &&
      typeof this.state.author === 'string' &&
      this.state.author.length > 0
    );
  };

  isNumberPagesValid = () => {
    return (
      this.state.numberPages &&
      typeof parseInt(this.state.numberPages) === 'number' &&
      parseInt(this.state.numberPages) > 0
    );
  };

  isPublisherValid = () => {
    return (
      this.state.publisher &&
      typeof this.state.publisher === 'string' &&
      this.state.publisher.length > 0
    );
  };

  isEventTargetValid = (value, type) => {
    console.log('in isEventTargetValid');
    console.log(value);
    console.log(value > 0);
    console.log(value.length > 0);
    console.log(type);
    console.log(typeof parseInt(value));
    console.log(typeof parseInt(value) === 'number');
    console.log(value.length > 0);
    var ReturnValue =
      value &&
      // (value > 0 || value.length > 0) &&
      (type === 'string'
        ? typeof value === 'string' && value.length > 0
        : typeof parseInt(value) === 'number' && parseInt(value) > 0);

    console.log('returnValue = ' + ReturnValue);
    return ReturnValue;
  };

  handleChangeTitle = event => {
    this.setState({ title: event.target.value });
    if (
      this.isAuthorValid() &&
      this.isNumberPagesValid() &&
      this.isPublisherValid() &&
      this.isEventTargetValid(event.target.value, 'string')
    ) {
      this.setState({ isAddValid: true });
    } else {
      if (this.state.isAddValid) {
        this.setState({ isAddValid: false });
      }
    }
  };
  handleChangeAuthor = event => {
    this.setState({ author: event.target.value });
    if (
      this.isTitleValid() &&
      this.isNumberPagesValid() &&
      this.isPublisherValid() &&
      this.isEventTargetValid(event.target.value, 'string')
    ) {
      this.setState({ isAddValid: true });
    } else {
      if (this.state.isAddValid) {
        this.setState({ isAddValid: false });
      }
    }
  };
  handleChangeNumberPages = event => {
    console.log('in handleChangeNumberPages');
    this.setState({
      numberPages:
        parseInt(event.target.value) > 0 ? parseInt(event.target.value) : null,
    });
    if (
      this.isTitleValid() &&
      this.isAuthorValid() &&
      this.isPublisherValid() &&
      this.isEventTargetValid(event.target.value, 'number')
    ) {
      this.setState({ isAddValid: true });
    } else {
      if (this.state.isAddValid) {
        this.setState({ isAddValid: false });
      }
    }
  };
  handleChangePublisher = event => {
    this.setState({ publisher: event.target.value });
    if (
      this.isTitleValid() &&
      this.isAuthorValid() &&
      this.isNumberPagesValid() &&
      this.isEventTargetValid(event.target.value, 'string')
    ) {
      this.setState({ isAddValid: true });
    } else {
      if (this.state.isAddValid) {
        this.setState({ isAddValid: false });
      }
    }
  };

  getStates = () => {
    console.log('this.state.title = ' + this.state.title);
    console.log('this.state.author = ' + this.state.author);
    console.log('this.state.numberPages = ' + this.state.numberPages);
    console.log('this.state.publisher = ' + this.state.publisher);
  };

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      title: this.state.title,
      author: this.state.author,
      numberPages: this.state.numberPages,
      publisher: this.state.publisher,
    };

    axios
      .put(
        'https://limitless-springs-00633.herokuapp.com/book/' + this.props.id,
        user
      )
      .catch(error => {
        console.log('we are in error state');
        console.log(error);
      })
      .then(() => {
        this.props.refreshData();
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChangeTitle}
            />
            <input
              type="text"
              name="author"
              value={this.state.author}
              onChange={this.handleChangeAuthor}
            />
            <input
              type="text"
              name="numberPages"
              value={this.state.numberPages}
              onChange={this.handleChangeNumberPages}
            />
            <input
              type="text"
              name="publisher"
              value={this.state.publisher}
              onChange={this.handleChangePublisher}
            />
          </label>
          <button
            type="submit"
            data-is-add-valid={this.state.isAddValid}
            style={{
              pointerEvents: this.state.isAddValid ? 'initial' : 'none',
              color: this.state.isAddValid ? 'black' : 'gray',
            }}
          >
            Add
          </button>
          <button type="cancel" onClick={this.props.cancelButtonCallBack}>
            Cancel
          </button>
        </form>
        {/* <button type="cancel" onClick={this.props.cancelButtonCallBack}>
          Cancel
        </button> */}
      </div>
    );
  }
}

export default EditBook;
