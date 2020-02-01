import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {PhoneSpecifications} from './PhoneSpecifications';
import { buildPhone } from '../../testHelpers/build-phone';

storiesOf('PhoneSpecifications', module)
  .add('empty specifications', () => (
  <PhoneSpecifications phone={buildPhone({})}/>
))
  .add('real specifications', () => (
    <PhoneSpecifications phone={buildPhone({
      color: 'grey',
      screen: '7"',
      processor: 'Snap Dragon',
      ram: 16
    })}/>));
