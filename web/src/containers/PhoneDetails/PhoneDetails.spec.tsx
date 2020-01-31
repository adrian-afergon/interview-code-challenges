import * as React from 'react';
import { RenderResult } from '@testing-library/react';
import { PhoneDetails } from './';
import { renderWithRedux } from '../../testHelpers/render-redux';
import { MemoryRouter, Route } from 'react-router-dom';
import { Store } from 'redux';
import { store } from '../../config/store';

describe('PhoneDetails', () => {
  it('should display the default message', async () => {
    const selectedPhoneId = 1;

    const renderResult: RenderResult = renderPhoneWithRouterAndReducer(
      <PhoneDetails />,
      selectedPhoneId,
      store,
    );
    expect(await renderResult.queryByText('Hello from PhoneDetails 1!')).toBeTruthy();
  });
});

const renderPhoneWithRouterAndReducer = (
  children: JSX.Element,
  selectedPhoneId: number,
  store: Store,
) =>
  renderWithRedux(
    <MemoryRouter initialEntries={[`phones/${selectedPhoneId}`]}>
      <Route path="phones/:phoneId">
        <PhoneDetails />
      </Route>
    </MemoryRouter>,
    store,
  );
