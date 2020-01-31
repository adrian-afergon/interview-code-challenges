import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {ErrorDialog} from './ErrorDialog';

storiesOf('ErrorDialog', module)
  .add('with text', () => (
      <ErrorDialog>
          This is an error message to be displayed!
      </ErrorDialog>
));
