import React from 'react';
import { mount } from 'enzyme';

import Spinbox from '../index';

describe('spinbox.js > ', () => {
  test('스핀박스를 생성할 수 있다.', () => {
    // given

    // when
    const spinbox = mount(<Spinbox />);

    // then
    expect(spinbox).toBeDefined();
  });

  test('스핀박스를 생성하면 기본값은 200이어야 한다.', () => {
    // given

    // when
    const spinbox = mount(<Spinbox />);

    // then
    const input = spinbox.find('input').getDOMNode();

    const actualValue = Number(input.value);
    expect(actualValue).toEqual(200);
  });
});