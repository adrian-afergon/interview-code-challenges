import {Dispatch} from "redux";
import {getPhones, getPhonesFulfilled, getPhonesRejected} from "../actions/phone.actions";
import {Phone} from "../models/Phone";

export const fetchGetPhones = (fetchPhones: () => Promise<Phone[]>) => (dispatch: Dispatch) => {
    dispatch(getPhones());
    return fetchPhones().then(
        (phones) => dispatch(getPhonesFulfilled(phones)),
        (error) => dispatch(getPhonesRejected(error)),
    );
};
