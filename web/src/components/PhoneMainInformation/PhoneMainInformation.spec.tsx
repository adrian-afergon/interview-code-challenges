import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { PhoneMainInformation} from './';
import { buildPhone } from '../../testHelpers/build-phone';
import { PhoneMainInformationMessages } from './PhoneMainInformation';

describe('PhoneMainInformation', () => {

  let renderResult: RenderResult;

  it('should display the unknown messages', () => {
    renderResult = render(
      <PhoneMainInformation phone={buildPhone({
        name: '',
        manufacturer: '',
        price: 0,
        description: ''
      })}/>,
    );
    findExpectedMessagesFor(
      PhoneMainInformationMessages.UNKNOWN_NAME,
      PhoneMainInformationMessages.UNKNOWN_MANUFACTURER,
      PhoneMainInformationMessages.UNKNOWN_PRICE,
      PhoneMainInformationMessages.UNKNOWN_DESCRIPTION
    )
  });


  it('should display the phone values', () => {
    let aPhone = buildPhone({
      name: 'iPhone X',
      manufacturer: 'Apple',
      price: 799,
      description: 'This is an amazing terminal'
    });
    renderResult = render(
      <PhoneMainInformation phone={aPhone}/>,
    );
    findExpectedMessagesFor(
      aPhone.name,
      aPhone.manufacturer,
      `${aPhone.price} €`,
      aPhone.description
    )
  });

  const findExpectedMessagesFor = (name: string, manufacturer: string, priceMessage: string, description: string) => {
    expect(renderResult.queryByText(name)).toBeTruthy();
    expect(renderResult.queryByText(manufacturer)).toBeTruthy();
    expect(renderResult.queryByText(priceMessage)).toBeTruthy();
    expect(renderResult.queryByText(description)).toBeTruthy();
  }

});
