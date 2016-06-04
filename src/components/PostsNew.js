import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        //blogpost has been created, navigate the user to the index
        //we navigate by calling this.context.router.push with a new path to navigate to
        this.context.router.push('/');
      });
  }
  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props; // same as const handleSubmit = this.props.handleSubmit;
    return (                                                                     // same as const title = this.props.fields.title;
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        <h3>Create a new post</h3>

        <div className={ `form-group ${ title.touched && title.invalid ? 'has-danger' : '' }` }>
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" { ...title }/>
          <div className="text-help">
            { title.touched ? title.error : '' }
          </div>
        </div>
        <div className={ `form-group ${ categories.touched && categories.invalid ? 'has-danger' : '' }` }>
          <label htmlFor="categories">Categories</label>
          <input type="text" className="form-control" { ...categories }/>
          <div className="text-help">
            { categories.touched ? categories.error : '' }
          </div>
        </div>
        <div className={ `form-group ${ content.touched && content.invalid ? 'has-danger' : '' }` }>
          <label htmlFor="content">Content</label>
          <textarea name="" id="" cols="30" rows="10" className="form-control" { ...content } />
          <div className="text-help">
            { content.touched ? content.error : '' }
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = 'Enter the title';
  }
  if (!values.categories) {
    errors.categories = 'Enter Categories';
  }
  if (!values.content) {
    errors.content = 'Enter Content';
  }
  return errors;
}

//connect: first argument is mapStateToProps, 2d mapDispatchToProps
// reduxForm: first is formConfig, 2d is mapStateToProps, 3d is mapDispatchToProps

export default reduxForm({
  form: 'PostsNew',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);