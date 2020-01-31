import * as React from "react";
import {applyMiddleware, Store} from "redux";
import {render, RenderResult} from "@testing-library/react";
import {Provider} from "react-redux";
import { createStore } from 'redux';
import reducer from "../config/reducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";

const getTestMiddleware = () => {
    return applyMiddleware(thunk);
};

export const renderWithRedux = (
    component: JSX.Element,
    store: Store = createStore(reducer, composeWithDevTools(getTestMiddleware()))
): RenderResult => render(
    <Provider store={store}>
        {component}
    </Provider>
);
