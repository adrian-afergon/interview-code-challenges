import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ColorIcon } from './ColorIcon';

storiesOf('ColorIcon', module)
  .add('with default color', () => <ColorIcon />);

storiesOf('ColorIcon', module)
  .add('with red color', () => <ColorIcon color="red" />);
