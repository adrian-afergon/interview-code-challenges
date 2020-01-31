import * as React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import { PhoneItem} from './';
import {buildPhone} from "../../testHelpers/build-phone";
import {PhoneItemRole} from "./PhoneItem";

describe('PhoneItem', () => {
  it('display the phone with the specified data', () => {

    const aPhone = buildPhone({
      id: 1,
      name: 'Phone number one',
      price: 99,
      manufacturer: 'Best manufacturer'
    });

    const renderResult: RenderResult = render(
      <PhoneItem phone={aPhone} onClick={jest.fn()}/>,
    );
    expect(renderResult.queryByText(aPhone.name)).toBeTruthy();
    expect(renderResult.queryByText(aPhone.price.toString())).toBeTruthy();
    expect(renderResult.queryByText(aPhone.manufacturer)).toBeTruthy();
  });

  it('call an event when is clicked', async () => {
    const clickFunction = jest.fn();
    const aPhone = buildPhone({
      id: 53,
    });

    const renderResult: RenderResult = render(
        <PhoneItem phone={aPhone} onClick={clickFunction}/>,
    );
    fireEvent.click(await renderResult.findByRole(PhoneItemRole));

    expect(clickFunction).toHaveBeenCalledWith(aPhone.id);
  });

});
