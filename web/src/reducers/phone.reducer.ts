import {Phone} from "../models/Phone";
import {PhoneActions, PhoneActionTypes} from "../actions/phone.actions";

export interface PhoneState {
    readonly phones: Phone[]; // TODO: use record instead to easy access.
    readonly loading: boolean;
    readonly errorMessage?: string;
}

const initialPhoneState = {
    phones: [],
    loading: false,
};

export default (state: PhoneState = initialPhoneState, action: PhoneActions): PhoneState => {
    switch (action.type) {
        case PhoneActionTypes.GET_PHONES:
            return {
                ...state,
                loading: true,
            };
        case PhoneActionTypes.GET_PHONES_FULFILLED:
            return {
                ...state,
                phones: action.phones,
                loading: false,
                errorMessage: undefined
            };
        case PhoneActionTypes.GET_PHONES_REJECTED:
            return {
                ...state,
                loading: false,
                errorMessage: action.errorMessage,
            };
        default:
            return state;
    }
};
