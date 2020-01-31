import * as React from 'react';
import './Phones.scss';
import {PhoneRepository} from "../../repositories/PhoneRepository";

interface PhonesProps {
  phoneRepository: PhoneRepository
}

export const Phones: React.FC<PhonesProps> = ({phoneRepository}) => {
    return (
        <div className="Phones">
        </div>
    )
};

Phones.displayName = 'Phones';
