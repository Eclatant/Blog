import React, { Component } from 'react';

class Spinbox extends Component {
  componentWillMount() {
    this.state = {
      value: 200,
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={() => {
            this.setState({
              value: 999,
            });
          }}
        />
        <button>▲</button>
        <button>▼</button>
      </div>
    );
  }
}

export default Spinbox;
