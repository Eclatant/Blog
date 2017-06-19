import React, { Component } from 'react';
import ToDoList from './ToDoList';

import './ToDo.css';

export default class ToDoApp extends Component {
  getItems() {
    return this.props.todos || [];
  }

  render() {
    return (
      <div>
        <section className="todoapp">
          <ToDoList todos={this.props.todos} filter={this.props.filter} />
        </section>
      </div>
    );
  }
}
