import React, { Component } from 'react';

class Spinbox extends Component {
  render() {
    return (
      <div>
        <input type="text" defaultValue="200" />
        <button>▲</button>
        <button>▼</button>
      </div>
    );
  }
}

export default Spinbox;