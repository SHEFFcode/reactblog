import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props; // same as const handleSubmit = this.props.handleSubmit;
    return (                                                                     // same as const title = this.props.fields.title;
      <form onSubmit={ handleSubmit(this.props.createPost) }>
        <h3>Create a new post</h3>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" { ...title }/>
        </div>
        <div className="form-group">
          <label htmlFor="categories">Categories</label>
          <input type="text" className="form-control" { ...categories }/>
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea name="" id="" cols="30" rows="10" className="form-control" { ...content } />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

//connect: first argument is mapStateToProps, 2d mapDispatchToProps
// reduxForm: first is formConfig, 2d is mapStateToProps, 3d is mapDispatchToProps

export default reduxForm({
  form: 'PostsNew',
  fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);