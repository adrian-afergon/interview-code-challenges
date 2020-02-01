import * as React from 'react';
import './Phones.scss';
import { PhoneRepository } from '../../repositories/PhoneRepository';
import { Spinner } from '../../components/Spinner';
import { ErrorDialog } from '../../components/ErrorDialog';
import { PhoneItem } from '../../components/PhoneItem';
import { Link } from 'react-router-dom';
import { useAsyncPhones } from '../hooks/use-async-phones';

interface PhonesProps {
  phoneRepository: PhoneRepository;
}

export enum PhonesMessages {
  EMPTY_LIST = 'Sorry, the list is empty',
}

export const Phones: React.FC<PhonesProps> = ({ phoneRepository }) => {

  const {phones, loading, errorMessage} = useAsyncPhones(phoneRepository);

  return (
    <div className="Phones">
      {loading && <Spinner />}
      {errorMessage && <ErrorDialog>{errorMessage}</ErrorDialog>}
      {phones && phones.length > 0
        ? phones.map((phone) => (
            <Link to={`phones/${phone.id}`} key={phone.id}>
              <PhoneItem phone={phone} />
            </Link>
          ))
        : PhonesMessages.EMPTY_LIST}
    </div>
  );
};

Phones.displayName = 'Phones';
