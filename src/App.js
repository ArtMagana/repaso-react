import React, { Component, Fragment } from 'react';

import TodoList from './components/TodoList/index';
import Pokemon from './components/Pokemon/index';
import Firebase from './components/Firebase/index';

class App extends Component {

  

  render() {
    return (
      <Fragment>
        {/* <TodoList /> */}
        {/* <Pokemon /> */}
        <Firebase />
      </Fragment>
    );
  }
}

export default App;
