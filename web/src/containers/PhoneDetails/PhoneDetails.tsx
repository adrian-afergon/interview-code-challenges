import * as React from 'react';
import './PhoneDetails.scss';
import { Constants } from '../../.env/environment';
import { PhoneSpecifications } from '../../components/PhoneSpecifications';
import { PhoneMainInformation } from '../../components/PhoneMainInformation';
import { PhoneRepository, phoneRepository } from '../../repositories/PhoneRepository';
import { useAsyncPhone } from '../hooks/use-async-phone';
import { Spinner } from '../../components/Spinner';

export enum PhoneDetailMessages {
  NOT_FOUND = "The selected Phone can't be found",
}

interface PhoneDetailsProps {
  repository?: PhoneRepository
}

export const PhoneDetails: React.FC<PhoneDetailsProps> = ({repository = phoneRepository}) => {
  const { phone, loading } = useAsyncPhone(repository);
  return (
    <div className="PhoneDetails">
      {loading && <Spinner />}
      {!!phone ? (
        <div className="details-container">
          <div className="details-header">
            <img
              alt={phone.name}
              src={`${Constants.ASSETS_URL}/${phone.imageFileName}`}
            />
          </div>
          <div className="details-body">
            <PhoneMainInformation phone={phone}/>
            <PhoneSpecifications phone={phone}/>
          </div>
        </div>
      ) : (
        <h2 className="error-message">{PhoneDetailMessages.NOT_FOUND}</h2>
      )}
    </div>
  );
};

PhoneDetails.displayName = 'PhoneDetails';
