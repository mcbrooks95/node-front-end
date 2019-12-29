import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Post from './Post';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';



import { Router,
     hashHistory as history,
     } from 'react-router';

import { Switch, Route, BrowserRouter } from 'react-router-dom'
// Your routes.js file
import routes from './routes';

ReactDOM.render(
  (
  <BrowserRouter>
    <div className="App">
        <Switch>
            <Route exact path='/' component={App}></Route>
            <Route exact path='/post' 
            
            render={(props) => <Post
                title={"post.title"}
                category={"post.category"}
                datePosted={Date.now()}
                contentPosterId={"post.contactPosterId"}
                // upvoteAmount={3}
                comments={[]}
                contactPosterUserName={"post.contactPosterUserName"}
                postId={"asdf"}
                upvotes={[]}
                downvotes={[]}
                loggedInUserName={"this.state.loggedInUser.userName"}
                loggedInUserId={"this.state.loggedInUser.id"}
            />}
            ></Route>
        </Switch>


    </div>
  </BrowserRouter>
  )
    ,
  document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
