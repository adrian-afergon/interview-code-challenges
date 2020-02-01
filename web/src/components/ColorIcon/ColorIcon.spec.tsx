import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ColorIcon} from './';
import { ColorIconMessages } from './ColorIcon';

describe('ColorIcon', () => {
  it('should display an unknown color', () => {
    const renderResult: RenderResult = render(
      <ColorIcon/>,
    );
    expect(renderResult.queryByTitle(ColorIconMessages.UNKNOWN_COLOR)).toBeTruthy();
  });

  it('should display the given color', function() {
    const expectedColor = 'red';
    const renderResult: RenderResult = render(
      <ColorIcon color={expectedColor}/>,
    );
    expect(renderResult.queryByTitle(expectedColor)).toBeTruthy();
  });
});
