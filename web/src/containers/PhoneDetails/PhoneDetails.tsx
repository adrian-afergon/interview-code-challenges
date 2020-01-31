import * as React from 'react';
import './PhoneDetails.scss';
import { useParams } from "react-router-dom";

export const PhoneDetails: React.FC = () => {
    let { phoneId } = useParams();
    return (
        <div className="PhoneDetails">
            Hello from PhoneDetails {phoneId}!
        </div>
    )
};

PhoneDetails.displayName = 'PhoneDetails';
