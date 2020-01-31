import * as React from 'react';
import './PhoneItem.scss';
import {Phone} from "../../models/Phone";
import {Constants} from "../../.env/environment";

interface PhoneItemProps {
    phone: Phone,
    onClick: (phoneId: number) => void
}

export const PhoneItemRole = 'PhoneItem';

export const PhoneItem: React.FC<PhoneItemProps> = ({phone, onClick}) => (
  <div className="PhoneItem" role={PhoneItemRole} onClick={() => onClick(phone.id)}>
      <img alt={phone.name} src={`${Constants.ASSETS_URL}/${phone.imageFileName}`}/>
      <div>{phone.name}</div>
      <div>{phone.manufacturer}</div>
      <div>{phone.price}</div>
  </div>
);

PhoneItem.displayName = 'PhoneItem';
