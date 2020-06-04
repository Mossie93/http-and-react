import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import Posts from './Posts/Posts';
import './Blog.css';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
});

class Blog extends Component {
  state = {
    auth: true
  }

  render () {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink to="/posts">Posts</NavLink></li>
              <li><NavLink to="/new-post">New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>
          {this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null}
          <Route path="/posts" component={Posts}/>
          <Route render={()=><h1>404, not found!</h1>}/>
        </Switch>
      </div>
    );
  }
}

export default Blog;