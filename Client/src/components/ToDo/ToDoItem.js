import React from 'react';
import classnames from 'classnames';
import TextInput from './TextInput';

class ToDoItem extends React.Component {
  render() {
    const itemClass = classnames({
      todo: true,
      completed: this.props.isCompleted,
      editing: this.props.isEditing,
    });

    return (
      <li className={itemClass}>
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            defaultChecked={this.props.isCompleted}
            onClick={() => this.props.toggleComplete(this.props.id)}
          />
          <label
            htmlFor="todo"
            ref="text"
            onDoubleClick={() => this.props.editItem(this.props.id)}
          >
            {this.props.text}
          </label>
          <button
            className="destroy"
            onClick={() => this.props.deleteItem(this.props.id)}
          />
        </div>
        <TextInput
          text={this.props.text}
          itemId={this.props.id}
          cancelEditing={this.props.cancelEditing}
          doneEditing={this.props.doneEditing}
        />
      </li>
    );
  }
}

export default ToDoItem;
