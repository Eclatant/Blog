import React, { Component } from 'react';

import ToDoHeader from './ToDoHeader';
import ToDoList from './ToDoList';
import ToDoTools from './ToDoTools';
import Footer from './Footer';

import './ToDo.css';

export default class ToDoApp extends Component {
  getNbActiveItems() {
    if (this.props.todos) {
      const activeItems = this.props.todos.filter(
        item => item.get('status') === 'active',
      );
      return activeItems.size;
    }
    return 0;
  }

  getItems() {
    return this.props.todos || [];
  }

  render() {
    return (
      <div>
        <section className="todoapp">
          <ToDoHeader />
          <ToDoList todos={this.props.todos} filter={this.props.filter} />
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
