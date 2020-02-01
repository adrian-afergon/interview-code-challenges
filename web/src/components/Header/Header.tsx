import * as React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

export enum HeaderMessages {
  TITLE = 'Phone Catalogue'
}

export const Header: React.FC = () => (
  <header className="Header">
    <div className="container menu">
      <NavLink to={'/'} activeClassName="is-active" exact={true} role="back">
        <i className="icon-left-open" />
        <h1>{HeaderMessages.TITLE}</h1>
      </NavLink>
    </div>
  </header>
);

Header.displayName = 'Header';
