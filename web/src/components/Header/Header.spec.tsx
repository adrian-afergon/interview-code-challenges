import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Header} from './index';
import { MemoryRouter } from 'react-router-dom';
import { HeaderMessages } from './Header';

describe('Header', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <MemoryRouter>
        <Header/>
      </MemoryRouter>,
    );
    expect(renderResult.queryByText(HeaderMessages.TITLE)).toBeTruthy();
  });
});
