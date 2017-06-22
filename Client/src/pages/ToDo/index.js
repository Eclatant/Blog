import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as Action from './ToDoAction';

import ToDoHeader from './ToDoHeader';
import ToDoList from './ToDoList';
import ToDoTools from './ToDoTools';
import Footer from './Footer';

import './ToDo.css';

class ToDoApp extends Component {
  constructor(props) {
    super(props);
    this.getNbActiveItems = this.getNbActiveItems.bind(this);
  }

  getNbActiveItems() {
    if (this.props.todos) {
      const activeItems = this.props.todos.filter(
        item => item.get('status') === 'active',
      );
      return activeItems.size;
    }
    return 0;
  }

  render() {
    return (
      <div>
        <section className="todoapp">
          <ToDoHeader addItem={this.props.addItem} />
          <ToDoList {...this.props} />
          <ToDoTools
            changeFilter={this.props.changeFilter}
            filter={this.props.filter}
            nbActiveItems={this.getNbActiveItems()}
            clearCompleted={this.props.clearCompleted}
          />
        </section>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.get('todos'),
    filter: state.get('filter'),
  };
}

export default connect(mapStateToProps, Action)(ToDoApp);

// <ToDoList todos={this.props.todos} filter={this.props.filter} />;

// todos: state.ToDo.todos,
// filter: state.ToDo.filter,
// todos: state.get('todos'),
// filter: state.get('filter'),
// todos: state.ToDo.get('todos'),
// filter: state.ToDo.get('filter'),

// function mapDispatchToProps(dispatch) {
//   return {
//     initState: () => {
//       dispatch(initState());
//     },
//   };
// }

// export default connect(mapStateToProps)(ToDoApp);
// export default connect(mapStateToProps, mapDispatchToProps)(ToDoApp);
