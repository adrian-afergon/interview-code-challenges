import { Dispatch } from 'redux';
import {
  getPhones,
  getPhonesFulfilled,
  getPhonesRejected,
} from '../actions/phone.actions';
import { Phone } from '../models/Phone';

export const fetchGetPhones = (fetchPhones: () => Promise<Phone[]>) => async (
  dispatch: Dispatch,
) => {
  dispatch(getPhones());
  try {
    const phones = await fetchPhones();
    dispatch(getPhonesFulfilled(phones));
  } catch(error) {
    dispatch(getPhonesRejected(error.message));
  }
};
