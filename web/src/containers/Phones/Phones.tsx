import * as React from 'react';
import './Phones.scss';
import {PhoneRepository} from "../../repositories/PhoneRepository";
import {Phone} from "../../models/Phone";
import * as Redux from "react-redux";
import {RootApplicationState} from "../../config/reducer";
import {fetchGetPhones} from "../../thunks/phone.thunk";
import {Spinner} from "../../components/Spinner";
import {ErrorDialog} from "../../components/ErrorDialog";
import {PhoneItem} from "../../components/PhoneItem";

interface PhonesProps {
  phoneRepository: PhoneRepository
}

export enum PhonesMessages {
    EMPTY_LIST = 'Sorry, the list is empty'
}

export const Phones: React.FC<PhonesProps> = ({phoneRepository}) => {

    const phones: Phone[] = Redux.useSelector((state: RootApplicationState) => state.phones.phones);
    const loading: boolean = Redux.useSelector((state: RootApplicationState) => state.phones.loading);
    const errorMessage: string | undefined = Redux.useSelector((state: RootApplicationState) => state.phones.errorMessage);

    const dispatch = Redux.useDispatch();

    React.useEffect(() => {
        dispatch(fetchGetPhones(phoneRepository.getPhones));
    }, [phoneRepository]);

    return (
        <div className="Phones">
            {loading && <Spinner />}
            {errorMessage && (<>{errorMessage} <ErrorDialog>{errorMessage}</ErrorDialog></>)}
            {phones && phones.length > 0 ?
                phones.map((phone) => <PhoneItem key={phone.id} phone={phone}/>) :
                PhonesMessages.EMPTY_LIST
            }
        </div>
    )
};

Phones.displayName = 'Phones';
