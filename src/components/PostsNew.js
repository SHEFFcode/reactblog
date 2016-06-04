import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
  render() {
    return (
      <form action="">
        <h3>Create a new post</h3>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="categories">Categories</label>
          <input type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea name="" id="" cols="30" rows="10" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsNew',
  fields: ['title', 'categories', 'content']
})(PostsNew);