import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Readme from './Readme';
import Popup from './Popup';
import Bloglist from './Bloglist';
import Blogview from './Blogview';
import Msgboard from './Msgboard';


class App extends Component {
  constructor(props) {
    super(props);

    /* Setting initial state to avoid causing components
    that are trying to map over blogs or posts arrays to 
    throw error while fetch promises are trying to be resolved
    and stored in state */

    this.state = { 
      blogs: [],
      posts: []
    };

    this.getBlogs = this.getBlogs.bind(this);
    this.getPosts = this.getPosts.bind(this);
    this.getAllComments = this.getAllComments.bind(this);
  }

  // Fetches all comments for every post

  async getAllComments() {
    const urls = [];
    for(let i = 1; i <= 100; i++) {
      urls.push('https://jsonplaceholder.typicode.com/comments?postId=' + i);
    }
    const responses = await Promise.all(urls.map(url => fetch(url)));
    const comments = await Promise.all(responses.map(resp => resp.json()));
    return comments;
  }

  // Fetches every post and pushes its corresponding comments into it

  async getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    const comments = await this.getAllComments();
    return posts.map((post, i) => ({...post, comments: comments[i]}));
  }

  // Fetches blogs from our own public API from Backend Challenge

  async getBlogs() {
    const response = await fetch('https://public-api-demo.herokuapp.com/api/blogs');
    const blogs = await response.json();
    return blogs;
  }  


  // When component is mounted calls async fetch functions declared above

  async componentDidMount(){
    const fetchedBlogs = await this.getBlogs();
    const fetchedPosts = await this.getPosts();
    
    // Set state with responses to rerender DOM with received data

    this.setState({ blogs: [ ...fetchedBlogs ], posts: [ ...fetchedPosts ] });

  }

  render() {
    return (
      <div className="App">
        <Navbar />

        <Switch>

          <Route exact path="/" component={Readme}/>

          <Route exact path="/bloglist" component={props => (
            <Bloglist { ...props } blogs={ this.state.blogs } />
          )} />

          <Route exact path="/blogview/:id" component={props => (
            <Blogview { ...props } blogs={ this.state.blogs } />
          )} />

          <Route exact path="/msgboard" component={props => (
            <Msgboard { ...props } posts={ this.state.posts } />
          )} />

        </Switch>

        <Footer />

        <Popup />
      </div>
    );
  }
}

export default App;
