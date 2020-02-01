import * as React from 'react';
import { RenderResult } from '@testing-library/react';
import { PhoneDetails } from './';
import { getTestMiddleware, renderWithRedux } from '../../testHelpers/render-redux';
import { MemoryRouter, Route } from 'react-router-dom';
import { createStore, Store } from 'redux';
import { store } from '../../config/store';
import { PhoneDetailMessages } from './PhoneDetails';
import { buildPhone } from '../../testHelpers/build-phone';
import reducer from '../../config/reducer';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { getPhonesFulfilled } from '../../actions/phone.actions';

describe('PhoneDetails', () => {
  it('display the not found message', async () => {
    const selectedPhoneId = 1;

    const renderResult: RenderResult = renderPhoneWithRouterAndReducer(
      <PhoneDetails />,
      selectedPhoneId,
      store,
    );
    expect(await renderResult.queryByText(PhoneDetailMessages.NOT_FOUND)).toBeTruthy();
  });

  it('display the phone details', async () => {
    const selectedPhoneId = 1;
    const aPhone = buildPhone({id: selectedPhoneId, price:10, ram: 2});

    const store = createStore(reducer, composeWithDevTools(getTestMiddleware()));
    store.dispatch(getPhonesFulfilled([aPhone]));

    const renderResult: RenderResult = renderPhoneWithRouterAndReducer(
      <PhoneDetails />,
      selectedPhoneId,
      store,
    );
    expect(await renderResult.queryByText(`${aPhone.name}`)).toBeTruthy();
    expect(await renderResult.queryByText(`${aPhone.manufacturer}`)).toBeTruthy();
    expect(await renderResult.queryByText(`${aPhone.price} €`)).toBeTruthy();
    expect(await renderResult.queryByText(`${aPhone.ram.toString()}`)).toBeTruthy();
    expect(await renderResult.queryByText(`${aPhone.processor}`)).toBeTruthy();
    expect(await renderResult.queryByText(`${aPhone.description}`)).toBeTruthy();
    expect(await renderResult.queryByText(`${aPhone.screen}`)).toBeTruthy();
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
