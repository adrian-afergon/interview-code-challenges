import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { PhoneDetails} from './';

describe('PhoneDetails', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <PhoneDetails/>,
    );
    expect(renderResult.queryByText('Hello from PhoneDetails!')).toBeTruthy();
  });
});