import * as React from 'react';
import './PhoneDetails.scss';
import { useParams } from 'react-router-dom';
import { Phone } from '../../models/Phone';
import * as Redux from 'react-redux';
import { RootApplicationState } from '../../config/reducer';
import { Constants } from '../../.env/environment';
import { useEffect } from 'react';
import { PhoneSpecifications } from '../../components/PhoneSpecifications';
import { PhoneMainInformation } from '../../components/PhoneMainInformation';

export enum PhoneDetailMessages {
  NOT_FOUND = "The selected Phone can't be found",
}

export const PhoneDetails: React.FC = () => {
  const { phoneId } = useParams();
  const phone: Phone | undefined = Redux.useSelector((state: RootApplicationState) =>
    state.phones.phones.find((phone) => phoneId === phone.id.toString()),
  );

  useEffect(() => {
    // TODO: In the reload the list is empty. An easy way is save the state in localStorage an retrieve it later
  }, [phoneId]);

  return (
    <div className="PhoneDetails">
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
