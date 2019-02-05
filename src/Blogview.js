import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './Blogview.css';

class Blogview extends Component {

  constructor(props) {
    super(props);

    /* Declaring an initial state to avoid throwing error by filtering over
    an undefined array */

    this.state = {
      title: '',
      image: '',
      body: ''
    };
  }
  
  componentDidMount() {

    /* Filters blogs that has been passed to it, filters out with the one
    details view is called by its ID and sets state with it to rerender DOM */

    const blogId = this.props.match.params.id;
    const viewedBlog = this.props.blogs.filter(blog => blogId === blog._id)[0];
    this.setState({ ...viewedBlog });

  }

  render() {
    
    const { title, body, image } = this.state;
    
    return(

      <div className="blogview-page">
        <div className="blogview-imagebox">
          <img src={ image } className="blogview-image" alt="Blog post" />
        </div>
        <div className="blogview-body">
          <h1 className="blogview-title">{ title }</h1>
          <p>{ body }</p>
        </div>
      </div>

    )
  }
}

export default withRouter(Blogview);