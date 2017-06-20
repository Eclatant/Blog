import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { expect } from 'chai';

import ToDoTools from '../ToDoTools';

const { renderIntoDocument,
        scryRenderedDOMComponentsWithTag,
        Simulate } = TestUtils;

describe('ToDoTools', () => {
  it('displays the number of items left', () => {
    const nbActiveItems = 3;
    const component = renderIntoDocument(
      <ToDoTools nbActiveItems={nbActiveItems} />,
    );
    const tools = scryRenderedDOMComponentsWithTag(component, 'footer');

    expect(tools[0].textContent).to.contain('3');
  });

  it('Highlights the active filter', () => {
    const filter = 'active';
    const component = renderIntoDocument(
      <ToDoTools filter={filter} />,
    );
    const filters = scryRenderedDOMComponentsWithTag(component, 'a');

    expect(filters[0].classList.contains('selected')).to.equal(false);
    expect(filters[1].classList.contains('selected')).to.equal(true);
    expect(filters[2].classList.contains('selected')).to.equal(false);
  });

  it('calls a callback when the user clicks on Clear Completed buttons', () => {
    let cleared = false;
    const clearCompleted = () => { cleared = true; };
    const component = renderIntoDocument(
      <ToDoTools clearCompleted={clearCompleted} />,
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.click(buttons[0]);

    expect(cleared).to.equal(true);
  });
});
