import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { PhoneSpecifications} from './';
import { buildPhone } from '../../testHelpers/build-phone';
import { PhoneSpecificationsMessages } from './PhoneSpecifications';

describe('PhoneSpecifications', () => {

  let renderResult: RenderResult;

  it('should display the default messages when has empty values', () => {
    renderResult = render(
      <PhoneSpecifications phone={buildPhone({
        ram: 0,
        processor: '',
        screen: ''
      })}/>,
    );
    findExpectedMessagesFor(
      PhoneSpecificationsMessages.UNKNOWN_RAM,
      PhoneSpecificationsMessages.UNKNOWN_PROCESSOR,
      PhoneSpecificationsMessages.UNKNOWN_SCREEN
    );
  });

  it('should display the specifications', function() {
    const phone = buildPhone({
      ram: 15,
      processor: 'Snap Dragon',
      screen: '7"'
    });

    renderResult = render(
      <PhoneSpecifications phone={phone}/>,
    );
    findExpectedMessagesFor(
      phone.ram.toString(),
      phone.processor,
      phone.screen
    );
  });

  const findExpectedMessagesFor = (ramMessage: string, processor: string, screen: string) => {
    expect(renderResult.queryByText(ramMessage)).toBeTruthy();
    expect(renderResult.queryByText(processor)).toBeTruthy();
    expect(renderResult.queryByText(screen)).toBeTruthy();
  }
});
