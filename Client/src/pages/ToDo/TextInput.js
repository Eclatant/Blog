import React from 'react';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.text };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  cancelEditing() {
    this.setState({ value: this.props.text });
    return this.props.cancelEditing(this.props.itemId);
  }

  handleKeyDown(e) {
    switch (e.key) {
      case 'Enter':
        return this.props.doneEditing(this.props.itemId, this.state.value);
      case 'Escape':
        return this.cancelEditing();
    }
  }

  handleOnBlur() {
    return this.cancelEditing();
  }

  handleOnChange({ target }) {
    this.setState({ value: target.value });
  }

  render() {
    return (<input
      className="edit"
      autoFocus
      value={this.state.value}
      onChange={this.handleOnChange}
      type="text"
      ref="itemInput"
      onKeyDown={this.handleKeyDown}
      onBlur={this.handleOnBlur}
    />);
  }
}

export default TextInput;
