import * as React from 'react';
import './PhoneMainInformation.scss';
import { Phone } from '../../models/Phone';

interface PhoneMainInformationProps {
  phone: Phone;
}

export enum PhoneMainInformationMessages {
  UNKNOWN_PRICE = 'Unknown Price',
  UNKNOWN_MANUFACTURER = 'Unknown Manufacturer',
  UNKNOWN_NAME = 'Unknown Name',
  UNKNOWN_DESCRIPTION = 'No description'
}

export const PhoneMainInformation: React.FC<PhoneMainInformationProps> = ({phone:{price, manufacturer, name, description}}) => (
  <div className="PhoneMainInformation">
    <div className="Price">
      {price ? `${price} €` : PhoneMainInformationMessages.UNKNOWN_PRICE}
    </div>
    <h3>{manufacturer || PhoneMainInformationMessages.UNKNOWN_MANUFACTURER}</h3>
    <h2>{name || PhoneMainInformationMessages.UNKNOWN_NAME}</h2>
    <p>{description || PhoneMainInformationMessages.UNKNOWN_DESCRIPTION}</p>
  </div>
);

PhoneMainInformation.displayName = 'PhoneMainInformation';
