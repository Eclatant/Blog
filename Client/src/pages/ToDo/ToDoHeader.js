import React, { Component } from 'react';

export default class ToDoHeader extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress({ key }) {
    if (key === 'Enter' && this.refs.addToDoInput.value !== '') {
      const itemText = this.refs.addToDoInput.value;
      this.refs.addToDoInput.value = '';
      return this.props.addItem(itemText);
    }
  }

  render() {
    return (
      <header className="header">
        <h1>To Do List</h1>
        <input
          className="new-todo"
          ref="addToDoInput"
          autoFocus
          autoComplete="off"
          placeholder="What needs to be done?"
          onKeyPress={this.handleKeyPress}
        />
      </header>
    );
  }
}

