import * as React from 'react';
import './PhoneSpecifications.scss';
import { ColorIcon } from '../ColorIcon';
import { Phone } from '../../models/Phone';

interface PhoneSpecificationsProps {
  phone: Phone
}

export enum PhoneSpecificationsMessages {
  UNKNOWN_SCREEN = 'Unknown screen',
  UNKNOWN_PROCESSOR = 'Unknown processor',
  UNKNOWN_RAM = 'Unknown ram',
}

export const PhoneSpecifications: React.FC<PhoneSpecificationsProps> = ({phone: {color, screen, processor, ram}}) => (
  <div className="PhoneSpecifications">
    <h3>Specifications</h3>
    <div>
      <span>Color:</span>
      <ColorIcon color={color}/>
    </div>
    <div>
      <span>Screen:</span> {screen || PhoneSpecificationsMessages.UNKNOWN_SCREEN}
    </div>
    <div>
      <span>Processor:</span> {processor || PhoneSpecificationsMessages.UNKNOWN_PROCESSOR}
    </div>
    <div>
      <span>Ram:</span> {ram || PhoneSpecificationsMessages.UNKNOWN_RAM}
    </div>
  </div>
);

PhoneSpecifications.displayName = 'PhoneSpecifications';
