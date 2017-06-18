import React from 'react';
import { mount } from 'enzyme';

import Spinbox from '../index';

let spinbox;

beforeEach(() => {
  spinbox = mount(<Spinbox />);
});

function getValueFromTargetNode(target) {
  const targetNode = target.getDOMNode();
  return Number(targetNode.value);
}

describe('spinbox.js > ', () => {
  test('스핀박스를 생성하면 기본값은 200이어야 한다.', () => {
    // given
    // when
    const input = spinbox.find('input');

    // then
    const actualValue = getValueFromTargetNode(input);
    expect(actualValue).toEqual(200);
  });

  test('입력 폼에 999를 입력할 수 있다.', () => {
    // given
    // when
    const input = spinbox.find('input');

    input.simulate('change', {
      target: {
        value: '999',
      },
    });

    // then
    const actualValue = getValueFromTargetNode(input);
    expect(actualValue).toEqual(999);
  });

  test('입력 폼에 0을 입력할 수 있다.', () => {
    // given
    // when
    const input = spinbox.find('input');

    input.simulate('change', {
      target: {
        value: '0',
      },
    });

    // then
    const actualValue = getValueFromTargetNode(input);
    expect(actualValue).toEqual(0);
  });

  test('증가 버튼을 클릭하여 값을 1 증가시킬 수 있다', () => {
    // given
    const defaultValue = 200;

    // when
    const incrementBtn = spinbox.find('[data-name="increment"]');
    incrementBtn.simulate('click');

    // then
    const actualValue = getValueFromTargetNode(spinbox.find('input'));
    expect(actualValue).toEqual(defaultValue + 1);
  });

  test('증가 버튼을 세 번 클릭하여 값을 3 증가시킬 수 있다', () => {
    // given
    const defaultValue = 200;

    // when
    const incrementBtn = spinbox.find('[data-name="increment"]');
    incrementBtn.simulate('click');
    incrementBtn.simulate('click');
    incrementBtn.simulate('click');

    // then
    const actualValue = getValueFromTargetNode(spinbox.find('input'));
    expect(actualValue).toEqual(defaultValue + 3);
  });
});
