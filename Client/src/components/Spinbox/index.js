import React, { Component } from 'react';

class Spinbox extends Component {
  componentWillMount() {
    this.state = {
      value: 200,
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleClickIncrement = this.handleClickIncrement.bind(this);
    this.handleClickDecrement = this.handleClickDecrement.bind(this);
  }

  handleChangeInput({ target }) {
    this.setState({
      value: target.value,
    });
  }

  handleClickIncrement() {
    this.setState({
      value: this.state.value + 1,
    });
  }

  handleClickDecrement() {
    this.setState({
      value: this.state.value - 1,
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChangeInput}
        />
        <button
          data-name="increment"
          onClick={this.handleClickIncrement}
        >▲</button>
        <button
          data-name="decrement"
          onClick={this.handleClickDecrement}
        >▼</button>
      </div>
    );
  }
}

export default Spinbox;
