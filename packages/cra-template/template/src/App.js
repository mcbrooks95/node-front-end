import React from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';
import EditBook from './EditBook';
import Post from './Post';

// var url = 'https://limitless-springs-00633.herokuapp.com/books';

// source code = https://www.youtube.com/watch?v=oQnojIyTXb8

export class App extends React.Component {
  state = {
    persons: [],
    personBeingEdited: null,
    posts: []
  };

  componentDidMount() {
    axios
      .get(`https://limitless-springs-00633.herokuapp.com/books`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
      .then(() => {
        axios
        .get(`https://limitless-springs-00633.herokuapp.com/posts`)
        .then(res => {
          const posts = res.data;
          this.setState({ posts });
        })
      })
  }

  handleEdit = person => {
    // console.log('in handle edit and person is ' + person);
    this.setState({ personBeingEdited: person });
  };

  handleCancel = () => {
    // console.log('cancel is handled');
    this.setState({ personBeingEdited: null });
  };

  refreshData = () => {
    // console.log('refreshData called');
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
    console.log("about to print this.state.posts")
    console.log(this.state.posts)
    return (
      <div style={{ backgroundColor: '#DAE0E6' }}>
        <table>
          <tbody>
            <tr key="thing1">
              <th>title</th>
              <th>author</th>
              <th>numberPages</th>
              <th>publisher</th>
              <th>Edit Button</th>
            </tr>
            {this.state.persons.map(person =>
              this.state.personBeingEdited &&
              person._id === this.state.personBeingEdited._id ? (
                <EditBook
                  id={this.state.personBeingEdited._id}
                  author={this.state.personBeingEdited.author}
                  title={this.state.personBeingEdited.title}
                  numberPages={this.state.personBeingEdited.numberPages}
                  publisher={this.state.personBeingEdited.publisher}
                  cancelButtonCallBack={() => this.handleCancel()}
                  refreshData={() => this.refreshData()}
                />
              ) : (
                <tr key={person._id}>
                  <td key={'title'}>{person.title}</td>
                  <td key={'author'}>{person.author}</td>
                  <td key={'numberPages'}>{person.numberPages}</td>
                  <td key={'publisher'}>{person.publisher}</td>
                  <td
                    key={'button'}
                    style={{
                      display: this.state.personBeingEdited
                        ? 'none'
                        : 'initial',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => this.handleEdit(person)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>






        {this.state.posts.map(post =>
            (
                <Post
                  title={post.title}
                  category={post.category}
                  datePosted={post.datePosted}
                  contentPosterId={post.contactPosterId}
                  upvoteAmount={post.upvotes.length - post.downvotes.length}
                  comments={[]}
                  contactPosterUserName={post.contactPosterUserName}
                  postId={post._id}
                />
              ) 
            )}
        {/* <Post />
        <Post />
        <Post /> */}
      </div>
    );
  }
}

export default App;
