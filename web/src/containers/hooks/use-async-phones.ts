import { phoneRepository, PhoneRepository } from '../../repositories/PhoneRepository';
import { Phone } from '../../models/Phone';
import * as Redux from 'react-redux';
import { RootApplicationState } from '../../config/reducer';
import * as React from 'react';
import { fetchGetPhones } from '../../thunks/phone.thunk';

export const useAsyncPhones = (repository: PhoneRepository = phoneRepository) => {
  const phones: Phone[] = Redux.useSelector(
    (state: RootApplicationState) => state.phones.phones,
  );
  const loading: boolean = Redux.useSelector(
    (state: RootApplicationState) => state.phones.loading,
  );
  const errorMessage: string | undefined = Redux.useSelector(
    (state: RootApplicationState) => state.phones.errorMessage,
  );

  const dispatch = Redux.useDispatch();

  React.useEffect(() => {
    dispatch(fetchGetPhones(repository.getPhones));
  }, [repository]);

  return {phones, loading, errorMessage}
};
