import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { PhoneItem} from './';

describe('PhoneItem', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <PhoneItem/>,
    );
    expect(renderResult.queryByText('Hello from PhoneItem!')).toBeTruthy();
  });
});