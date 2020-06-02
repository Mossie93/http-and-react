import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import './Blog.css';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null
  }

  componentDidMount() {
    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return { ...post, author: 'Max' }
        });
        this.setState({posts: updatedPosts});
      });
  }

  postSelectedHanlder = (id) => {
    this.setState({selectedPostId: id});
  }

  render () {
    const posts = this.state.posts.map(post => {
      return <Post 
        key={post.id} 
        title={post.title} 
        author={post.author}
        clicked={() => {this.postSelectedHanlder(post.id)}}
      />
    });

    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/new-post">New post</a></li>
            </ul>
          </nav>
        </header>
        <section className="Posts">
          {posts}
        </section>
      </div>
    );
  }
}

export default Blog;