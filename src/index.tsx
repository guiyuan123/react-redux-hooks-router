// Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {StoreContext, makeStore} from './store';
import { BrowserRouter as Router, Route } from "react-router-dom";
import todo from './views/todo'

const store = makeStore();

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Router>
      <Route exact path="/" component={todo} />
    </Router>
  </StoreContext.Provider>,
  document.getElementById('root'),
);
