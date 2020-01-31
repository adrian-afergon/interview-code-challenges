import * as React from 'react';
import './PhoneItem.scss';
import {Phone} from "../../models/Phone";

interface PhoneItemProps {
    phone: Phone
}

export const PhoneItemRole = 'PhoneItem';

export const PhoneItem: React.FC<PhoneItemProps> = ({phone}) => (
  <div className="PhoneItem" role={PhoneItemRole}>
      <div>{phone.name}</div>
      <div>{phone.manufacturer}</div>
      <div>{phone.price}</div>
  </div>
);

PhoneItem.displayName = 'PhoneItem';
