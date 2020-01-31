import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ErrorDialog} from './';

describe('ErrorDialog', () => {
  it('should display the default message', () => {
    const message = 'Irrelevant message';

    const renderResult: RenderResult = render(
        <ErrorDialog>{message}</ErrorDialog>,
    );
    expect(renderResult.queryByText(message)).toBeTruthy();
  });
});
