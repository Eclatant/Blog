import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { expect } from 'chai';

import ToDoItem from '../ToDoItem';

const { renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate,
} = TestUtils;

describe('ToDoItem', () => {
  it('renders an item', () => {
    const text = 'React';
    const component = renderIntoDocument(
      <ToDoItem text={text} />,
    );
    const todo = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(todo.length).to.equal(1);
    expect(todo[0].textContent).to.contain('React');
  });

  it('strikes through the item if it is completed', () => {
    const text = 'React';
    const component = renderIntoDocument(
      <ToDoItem text={text} isCompleted />,
    );
    const todo = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(todo[0].classList.contains('completed')).to.equal(true);
  });

  it('should look different when editing', () => {
    const text = 'React';
    const component = renderIntoDocument(
      <ToDoItem text={text} isEditing />,
    );
    const todo = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(todo[0].classList.contains('editing')).to.equal(true);
  });

  // TODO: TestCode 수정
  it.skip('should be checked if the item is completed', () => {
    const text = 'React';
    const text2 = 'Redux';
    const component = renderIntoDocument(
      <div>
        <ToDoItem text={text} isCompleted />
        <ToDoItem text={text2} isCompleted={false} />
      </div>,
    );

    const input = scryRenderedDOMComponentsWithTag(component, 'input');
    expect(input[0].checked).to.equal(true);
    expect(input[1].checked).to.equal(false);
  });

  it('invokes callback when the delete button is clicked', () => {
    const text = 'React';
    let deleted = false;
    // 가짜 deleteItem 함수 정의
    const deleteItem = () => { deleted = true; };
    const component = renderIntoDocument(
      <ToDoItem text={text} deleteItem={deleteItem} />,
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.click(buttons[0]);
    // deleteItem 함수 호출 검증
    expect(deleted).to.equal(true);
  });

  it('invokes callback when checkbox is clicked', () => {
    const text = 'React';
    let isChecked = false;
    const toggleComplete = () => { isChecked = true; };
    const component = renderIntoDocument(
      <ToDoItem text={text} toggleComplete={toggleComplete} />,
    );
    const checkboxes = scryRenderedDOMComponentsWithTag(component, 'input');
    Simulate.click(checkboxes[0]);

    expect(isChecked).to.equal(true);
  });

  it('calls a callback when text is double clicked', () => {
    let text = 'React';
    const editItem = () => { text = 'Redux'; };
    const component = renderIntoDocument(
      <ToDoItem text={text} editItem={editItem} />,
    );
    const label = component.refs.text;

    Simulate.doubleClick(label);
    expect(text).to.equal('Redux');
  });
});
