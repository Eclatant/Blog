import React from 'react';
import ToDoItem from './ToDoItem';

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.isCompleted = this.isCompleted.bind(this);
  }

  getItems() {
    if (this.props.todos) {
      return this.props.todos.filter(
        item => this.props.filter === 'all' || item.get('status') === this.props.filter,
      );
    }
    return [];
  }

  // TODO: ESLint
  isCompleted(item) {
    return item.get('status') === 'completed';
  }

  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.getItems().map(item => (
            <ToDoItem
              key={item.get('text')}
              text={item.get('text')}
              id={item.get('id')}
              isCompleted={this.isCompleted(item)}
              isEditing={item.get('editing')}
              doneEditing={this.props.doneEditing}
              cancelEditing={this.props.cancelEditing}
              toggleComplete={this.props.toggleComplete}
              deleteItem={this.props.deleteItem}
              editItem={this.props.editItem}
            />
          ))}
        </ul>
      </section>
    );
  }
}
