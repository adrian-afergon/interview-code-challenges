import * as React from 'react';
import './Spinner.scss';

export const Spinner: React.FC<{}> = () => (
  <div className="Spinner">
    <div>
      <i className="icon-spin1 animate-spin" />
    </div>
  </div>
);

Spinner.displayName = 'Spinner';
