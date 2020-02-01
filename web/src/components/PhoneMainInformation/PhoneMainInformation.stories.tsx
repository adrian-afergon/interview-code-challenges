import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {PhoneMainInformation} from './PhoneMainInformation';
import { buildPhone } from '../../testHelpers/build-phone';

storiesOf('PhoneMainInformation', module)
  .add('with text', () => (
  <PhoneMainInformation phone={buildPhone({
    description: 'This is an incredible phone that you can buy right now',
    manufacturer: 'Apple',
    price: 799,
    name: 'iPhone X'
  })}/>
));
