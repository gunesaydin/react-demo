import React, { Component } from 'react';

import './Msgboard.css';

class Msgboard extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  // Opens up or closes down comments section for clicked post

  handleClick(id) {
    let elem = document.getElementById(`post-${id}`);
    elem.classList.toggle('hide');
  }

  render() {

    const { posts } = this.props;
    let postList = <li><h1>LOADING POSTS...</h1></li>;

    /* If post fetch is finished and posts state that has been passed to Msgboard
    component has posts shows posts.
    
    Else shows loading message */

    posts.length ? postList = posts.map((post, i) => (
      <li key={i} className="post"  onClick={() => this.handleClick(i)}>
        <h4>{ post.title }</h4>
        <p>{ post.body }</p>
        <ul id={`post-${i}`} className="comments hide">
          { 
            post.comments.map((comment, index) => (
              <li key={index} className="comment">
                <small>{ comment.email }</small>
                <h4>{ comment.name }</h4>
                <p>{ comment.body }</p>
              </li>
            ))

          }
        </ul>
      </li>
    )) : postList = <li><h1>LOADING POSTS...</h1></li>;

    return(
      <div className="msgboard-container">
        <ul className="msgboard">
          { postList }
        </ul>
      </div>
    )
  }
}

export default Msgboard;