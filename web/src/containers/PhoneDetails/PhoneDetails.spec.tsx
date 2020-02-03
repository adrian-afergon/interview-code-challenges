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
import { phoneRepository } from '../../repositories/PhoneRepository';
import { Phone } from '../../models/Phone';

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

  it('display the phone details when information is in the state', async () => {
    const selectedPhoneId = 1;
    const aPhone = buildPhone({id: selectedPhoneId, price:10, ram: 2});

    const store = createStore(reducer, composeWithDevTools(getTestMiddleware()));
    store.dispatch(getPhonesFulfilled([aPhone]));

    const renderResult: RenderResult = renderPhoneWithRouterAndReducer(
      <PhoneDetails />,
      selectedPhoneId,
      store,
    );
    await shouldRenderDetailsWith(renderResult, aPhone);
  });

  it('display the phone when information not found in the state ', async () => {
    const aPhoneId = 1;
    const aPhone = buildPhone({id: aPhoneId, price: 15, ram: 2});

    phoneRepository.getPhones = jest.fn( () => Promise.resolve([aPhone]));

    const store = createStore(reducer, composeWithDevTools(getTestMiddleware()));
    const renderResult = renderPhoneWithRouterAndReducer(<PhoneDetails repository={phoneRepository}/>, aPhoneId, store);

    await shouldRenderDetailsWith(renderResult, aPhone);
  });

});

const shouldRenderDetailsWith = async (renderResult: RenderResult, aPhone: Phone) => {
  expect(await renderResult.findByText(`${aPhone.name}`)).toBeTruthy();
  expect(await renderResult.findByText(`${aPhone.manufacturer}`)).toBeTruthy();
  expect(await renderResult.findByText(`${aPhone.price} €`)).toBeTruthy();
  expect(await renderResult.findByText(`${aPhone.ram.toString()}`)).toBeTruthy();
  expect(await renderResult.findByText(`${aPhone.processor}`)).toBeTruthy();
  expect(await renderResult.findByText(`${aPhone.description}`)).toBeTruthy();
  expect(await renderResult.findByText(`${aPhone.screen}`)).toBeTruthy();
};

const renderPhoneWithRouterAndReducer = (
  children: JSX.Element,
  selectedPhoneId: number,
  store: Store,
) =>
  renderWithRedux(
    <MemoryRouter initialEntries={[`phones/${selectedPhoneId}`]}>
      <Route path="phones/:phoneId">
        {children}
      </Route>
    </MemoryRouter>,
    store,
  );
