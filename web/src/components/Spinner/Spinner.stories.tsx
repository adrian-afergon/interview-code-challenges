import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {Spinner} from './Spinner';

storiesOf('Spinner', module)
  .add('with text', () => (
  <Spinner />
));
