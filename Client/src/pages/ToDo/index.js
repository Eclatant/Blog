import React, { Component } from 'react';

import ToDoHeader from './ToDoHeader';
import ToDoList from './ToDoList';
import ToDoTools from './ToDoTools';
import Footer from './Footer';

import './ToDo.css';

import { List, Map } from 'immutable';

const todos = List.of(
  Map({ id: 1, text: 'React', status: 'active', editing: false }),
  Map({ id: 2, text: 'Redux', status: 'active', editing: false }),
  Map({ id: 3, text: 'immutable', status: 'completed', editing: false }),
);

export default class ToDoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos,
      filter: 'all',
    };
  }
  getNbActiveItems() {
    if (this.state.todos) {
      const activeItems = this.state.todos.filter(
        item => item.get('status') === 'active',
      );
      return activeItems.size;
    }
    return 0;
  }

  getItems() {
    return this.state.todos || [];
  }

  render() {
    return (
      <div>
        <section className="todoapp">
          <ToDoHeader />
          <ToDoList todos={this.state.todos} filter={this.state.filter} />
          <ToDoTools
            filter={this.state.filter}
            nbActiveItems={this.getNbActiveItems()}
          />
        </section>
        <Footer />
      </div>
    );
  }
}
