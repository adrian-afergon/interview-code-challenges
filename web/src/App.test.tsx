import React from 'react';
import App from './App';
import {renderWithReduxAndRouter} from "./testHelpers/render-redux";
import {RenderResult} from "@testing-library/react";

it('renders without crashing', () => {
  const app: RenderResult = renderWithReduxAndRouter(<App />);
  app.unmount()
});
