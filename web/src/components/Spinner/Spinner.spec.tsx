import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Spinner } from './';

describe('Spinner', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(<Spinner />);
    expect(renderResult.queryByText('Hello from Spinner!')).toBeTruthy();
  });
});
