import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {PhoneItem} from './PhoneItem';

storiesOf('PhoneItem', module)
  .add('with text', () => (
  <PhoneItem />
));
