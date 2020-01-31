import React from 'react';
import App from './App';
import {renderWithRedux} from "./testHelpers/render-redux";
import {RenderResult} from "@testing-library/react";

it('renders without crashing', () => {
  const app: RenderResult = renderWithRedux(<App />);
  app.unmount()
});
