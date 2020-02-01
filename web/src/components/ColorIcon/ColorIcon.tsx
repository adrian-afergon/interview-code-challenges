import * as React from 'react';
import './ColorIcon.scss';

interface ColorIconProps {
  color?: string;
}

export enum ColorIconMessages {
  UNKNOWN_COLOR = 'Unknown',
  DEFAULT_COLOR = 'white'
}

export const ColorIcon: React.FC<ColorIconProps> = ({color}) => (
  <div className="ColorIcon"
       style={{ backgroundColor: color || ColorIconMessages.DEFAULT_COLOR }}
       title={color || ColorIconMessages.UNKNOWN_COLOR} />
);

ColorIcon.displayName = 'ColorIcon';
