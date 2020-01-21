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
import CommentContainer from './CommentContainer';
import CommentCreator from './CommentCreator';

export class PostContainer extends React.Component {
  state = {
    post: null,
    loggedInUser: null,
    comments: null,
  };

  componentDidMount() {
    console.log('this.props.match.params');
    console.log(this.props);
    console.log(this.props.match);
    console.log(this.props.match.params);
    console.log(this.props.match.params.userId);
    axios
      .get(
        'https://limitless-springs-00633.herokuapp.com/user/' +
          this.props.match.params.userId
      )
      .then(res => {
        const user = res.data;
        this.setState({ loggedInUser: user });
      })
      .then(() => {
        axios
          .get(
            'https://limitless-springs-00633.herokuapp.com/post/' +
              this.props.match.params.id
          )
          .then(res => {
            const post = res.data;
            this.setState({ post: post });
          });
      })
      .then(() => {
        axios
          .get(
            'https://limitless-springs-00633.herokuapp.com/post/' +
              this.props.match.params.id +
              '/comments'
          )
          .then(res => {
            console.log('about to print res.data');
            console.log(res.data);
            const comments = res.data;
            this.setState({ comments: comments });
          });
      });
  }

  render() {
    return this.state.post ? (
      <div>
        <HomeNav loggedInUserId={this.state.loggedInUser._id} />
        <Post
          title={this.state.post.title}
          category={this.state.post.category}
          datePosted={this.state.post.datePosted}
          contentPosterId={this.state.post.contactPosterId}
          comments={[]}
          contactPosterUserName={this.state.post.contactPosterId}
          postId={this.state.post._id}
          upvotes={this.state.post.upvotes}
          downvotes={this.state.post.downvotes}
          loggedInUserName={this.state.loggedInUser.userName}
          loggedInUserId={this.state.loggedInUser._id}
        />
        <CommentCreator
          postId={this.state.post._id}
          contactPosterId={this.state.loggedInUser._id}
        />
        {this.state.comments
          ? this.state.comments.map((comment, i) => {
              return (
                <CommentContainer
                  content={comment.content}
                  commentId={comment._id}
                  commentNumber={i + 1}
                />
              );
            })
          : null}
      </div>
    ) : null;
  }
}

export default PostContainer;
