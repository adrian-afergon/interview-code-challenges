import * as React from 'react';
import './ErrorDialog.scss';

export const ErrorDialog: React.FC<{}> = () => (
  <div className="ErrorDialog">
    Hello from ErrorDialog!
  </div>
);

ErrorDialog.displayName = 'ErrorDialog';
