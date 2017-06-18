import React, { Component } from 'react';

class Spinbox extends Component {
  componentWillMount() {
    this.state = {
      value: 200,
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput({ target }) {
    this.setState({
      value: target.value,
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
        <button>▲</button>
        <button>▼</button>
      </div>
    );
  }
}

export default Spinbox;
