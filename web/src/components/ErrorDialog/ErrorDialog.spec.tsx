import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ErrorDialog} from './';

describe('ErrorDialog', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <ErrorDialog/>,
    );
    expect(renderResult.queryByText('Hello from ErrorDialog!')).toBeTruthy();
  });
});