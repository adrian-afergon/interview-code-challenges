import { useParams } from 'react-router-dom';
import { Phone } from '../../models/Phone';
import * as Redux from 'react-redux';
import { RootApplicationState } from '../../config/reducer';
import * as React from 'react';
import { fetchGetPhones } from '../../thunks/phone.thunk';
import { PhoneRepository } from '../../repositories/PhoneRepository';

export const useAsyncPhone = (repository: PhoneRepository) => {
  const { phoneId } = useParams();
  // Maybe we can implement reselect in the future to improve the performance
  const phone: Phone | undefined = Redux.useSelector((state: RootApplicationState) =>
    state.phones.phones.find((phone) => phoneId === phone.id.toString()),
  );
  const loading = Redux.useSelector((state:RootApplicationState) => state.phones.loading);

  const dispatch = Redux.useDispatch();

  React.useEffect(() => {
    if (!phone)
      dispatch(fetchGetPhones(repository.getPhones));
  }, [phoneId, phone, repository, dispatch]);
  return {phone, loading}
};
