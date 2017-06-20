import React from 'react';
import ToDoItem from './ToDoItem';

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.isCompleted = this.isCompleted.bind(this);
  }

  // 각 상태에 따라 아이템 필터링
  getItems() {
    if (this.props.todos) {
      return this.props.todos.filter(
        item => this.props.filter === 'all' || item.get('status') === this.props.filter,
      );
    }
    return [];
  }

  // TODO ESLint
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
              isCompleted={this.isCompleted(item)}
              isEditing={item.get('editing')}
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
