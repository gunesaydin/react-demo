import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Bloglist.css';

class Bloglist extends Component {

  render() {

    const { blogs } = this.props;
    let blogList;

    /* If blogs are fetched and passed over to Bloglist component
    renders array of blog list items
    
    Else renders LOADING text */

    blogs.length ? blogList = blogs.map((blog, i) => (
      <li key={i} className="blogs-list-item">
        <Link className="blogs-list-item-link" to={`/blogview/${blog._id}`}>
          <img src={ blog.image } alt="Blog post" />
          <h2>{ blog.title }</h2>
          <p>{ blog.body }</p>
        </Link>
      </li>
    )) : blogList = <h1>LOADING BLOGS...</h1>

    return(
      <ul className="blogs-list">
        { blogList }
      </ul>
    )
  }

}

export default Bloglist;