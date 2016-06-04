import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew';
import PostsShow from './components/PostsShow';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ PostIndex } />
    <Route path="posts/new" component = { PostsNew } />
    <Route path="posts/:id" component={ PostsShow } />
  </Route>
);
