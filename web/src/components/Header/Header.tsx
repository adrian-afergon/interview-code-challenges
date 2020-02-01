import * as React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

export const Header: React.FC<{}> = () => (
  <header className="Header">
    <div className="container menu">
      <Link to={'/'}>
        <i className="icon-left-open" />
        <h1>Phone Catalogue</h1>
      </Link>
    </div>
  </header>
);

Header.displayName = 'Header';
