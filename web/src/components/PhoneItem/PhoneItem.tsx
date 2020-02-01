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
    <div className="item-image" style={{
        backgroundImage: `url(${Constants.ASSETS_URL}/${phone.imageFileName})`,
      }}/>
    <h3 role="manufacturer">{phone.manufacturer}</h3>
    <h2 role="name">{phone.name}</h2>
    <div className="price" role="name"><span>{phone.price}</span> <span>€</span></div>
  </div>
);

PhoneItem.displayName = 'PhoneItem';
