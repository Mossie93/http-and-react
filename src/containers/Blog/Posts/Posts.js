import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

import './Posts.css';

class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null
  }

  postSelectedHanlder = (id) => {
    this.setState({selectedPostId: id});
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

  render() {
    const posts = this.state.posts.map(post => {
      return <Link to={"/posts/" + post.id} key={post.id} >
        <Post
          title={post.title} 
          author={post.author}
          clicked={() => {this.postSelectedHanlder(post.id)}}
        />
      </Link>
    });

    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route path={this.props.match.url + "/:id"} exact component={FullPost}/>
      </div>
    );
  }
}

export default Posts;