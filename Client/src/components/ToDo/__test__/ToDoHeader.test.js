import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { expect } from 'chai';

import TodoHeader from '../TodoHeader';

const { renderIntoDocument,
        scryRenderedDOMComponentsWithTag,
        Simulate } = TestUtils;

describe('TodoHeader', () => {
  it('calls a callback on submit', () => {
    let addedItem = '';
    const addItem = (item) => { addedItem = item; };
    const component = renderIntoDocument(
      <TodoHeader addItem={addItem} />,
    );

    const input = component.refs.addToDoInput;
    input.value = 'This is a new item';
    Simulate.change(input);
    Simulate.keyPress(input, { key: 'Enter', keyCode: 13, which: 13 });

    expect(addedItem).to.equal('This is a new item');
  });
});
