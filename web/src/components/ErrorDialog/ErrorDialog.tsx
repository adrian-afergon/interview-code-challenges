import * as React from 'react';
import './ErrorDialog.scss';

export const ErrorDialog: React.FC = ({children}) => (
  <div className="ErrorDialog">
    {children}
  </div>
);

ErrorDialog.displayName = 'ErrorDialog';
