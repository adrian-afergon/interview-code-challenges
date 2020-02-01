import * as React from 'react';
import { applyMiddleware, Store } from 'redux';
import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../config/reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { BrowserRouter } from 'react-router-dom';

export const getTestMiddleware = () => {
  return applyMiddleware(thunk);
};

export const renderWithReduxAndRouter = (
  component: JSX.Element,
  store: Store = createStore(reducer, composeWithDevTools(getTestMiddleware())),
): RenderResult =>
  render(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>,
  );

export const renderWithRedux = (
  component: JSX.Element,
  store: Store = createStore(reducer, composeWithDevTools(getTestMiddleware())),
): RenderResult => render(<Provider store={store}>{component}</Provider>);
