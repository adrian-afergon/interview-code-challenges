import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {PhoneItem} from './PhoneItem';
import {buildPhone} from "../../testHelpers/build-phone";

storiesOf('PhoneItem', module)
  .add('with text', () => (
  <PhoneItem phone={buildPhone({})}/>
));
