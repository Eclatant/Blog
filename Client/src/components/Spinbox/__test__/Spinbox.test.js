import React from 'react';
import { mount } from 'enzyme';

import Spinbox from '../index';

function getValueFromTargetNode(target) {
  const targetNode = target.getDOMNode();
  return Number(targetNode.value);
}

describe('기본값 > ', () => {
  let spinbox;

  beforeEach(() => {
    spinbox = mount(<Spinbox />);
  });

  test('스핀박스를 생성하면 기본값은 200이어야 한다.', () => {
    // given
    // when
    const input = spinbox.find('input');

    // then
    const actualValue = getValueFromTargetNode(input);
    expect(actualValue).toEqual(200);
  });
});

describe('값 입력 >', () => {
  let spinbox;
  let input;

  beforeEach(() => {
    spinbox = mount(<Spinbox />);
    input = spinbox.find('input');
  });

  test('입력 폼에 999를 입력할 수 있다.', () => {
    // given
    // when
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
    input.simulate('change', {
      target: {
        value: '0',
      },
    });

    // then
    const actualValue = getValueFromTargetNode(input);
    expect(actualValue).toEqual(0);
  });
});

describe('값 증가 >', () => {
  const defaultValue = 200;
  let spinbox;
  let input;
  let incrementBtn;

  beforeEach(() => {
    spinbox = mount(<Spinbox />);
    input = spinbox.find('input');
    incrementBtn = spinbox.find('[data-name="increment"]');
  });

  test('증가 버튼을 클릭하여 값을 1 증가시킬 수 있다', () => {
    // given
    // when
    incrementBtn.simulate('click');

    // then
    const actualValue = getValueFromTargetNode(input);
    expect(actualValue).toEqual(defaultValue + 1);
  });

  test('증가 버튼을 세 번 클릭하여 값을 3 증가시킬 수 있다', () => {
    // given
    // when
    incrementBtn.simulate('click');
    incrementBtn.simulate('click');
    incrementBtn.simulate('click');

    // then
    const actualValue = getValueFromTargetNode(input);
    expect(actualValue).toEqual(defaultValue + 3);
  });
});
