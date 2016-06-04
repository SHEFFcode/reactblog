import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostIndex from './components/PostsIndex';

const Greeting = () => {
  return (<div>Hey There!</div>);
};

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ PostIndex } />
    <Route path="greet" component = { Greeting } />
    <Route path="greet2" component = { Greeting } />
    <Route path="greet3" component = { Greeting } />
  </Route>
);
