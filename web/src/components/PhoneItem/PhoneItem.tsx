import * as React from 'react';
import './PhoneItem.scss';
import { Phone } from '../../models/Phone';
import { Constants } from '../../.env/environment';

interface PhoneItemProps {
  phone: Phone;
}

export const PhoneItemRole = 'PhoneItem';

export const PhoneItem: React.FC<PhoneItemProps> = ({ phone }) => (
  <div className="PhoneItem" role={PhoneItemRole}>
    <div className="item-image">
      <img alt={phone.name} src={`${Constants.ASSETS_URL}/${phone.imageFileName}`} />
    </div>
    <h3>{phone.manufacturer}</h3>
    <h2>{phone.name}</h2>
    <div className="price"><span>{phone.price}</span> <span>€</span></div>
  </div>
);

PhoneItem.displayName = 'PhoneItem';
