import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import FullPost from './FullPost/FullPost';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  render () {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/posts">Posts</NavLink></li>
              <li><NavLink to="/new-post">New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts}/>
        <Route path="/posts" component={Posts}/>
        <Route path="/new-post" component={NewPost}/>
        <Route path="/:id" component={FullPost}/>
      </div>
    );
  }
}

export default Blog;