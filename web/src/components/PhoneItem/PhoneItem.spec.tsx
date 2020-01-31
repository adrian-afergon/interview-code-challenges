import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { PhoneItem} from './';
import {buildPhone} from "../../testHelpers/build-phone";

describe('PhoneItem', () => {
  it('should display the phone with the specified data', () => {

    const aPhone = buildPhone({
      id: 1,
      name: 'Phone number one',
      price: 99,
      manufacturer: 'Best manufacturer'
    });

    const renderResult: RenderResult = render(
      <PhoneItem phone={aPhone} />,
    );
    expect(renderResult.queryByText(aPhone.name)).toBeTruthy();
    expect(renderResult.queryByText(aPhone.price.toString())).toBeTruthy();
    expect(renderResult.queryByText(aPhone.manufacturer)).toBeTruthy();
  });
});
