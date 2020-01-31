import {Phone} from "../models/Phone";

export enum PhoneActionTypes {
    GET_PHONES = 'react-redux-boilerplate/phones/GET_PHONE',
    GET_PHONES_FULFILLED = 'react-redux-boilerplate/phones/GET_PHONE_FULFILLED',
    GET_PHONES_REJECTED = 'react-redux-boilerplate/phones/GET_PHONE_REJECTED',
}

export const getPhones = () => ({
    type: PhoneActionTypes.GET_PHONES,
}) as const;
export type GetPhonesAction = ReturnType<typeof getPhones>;

export const getPhonesFulfilled = (phones: Phone[]) => ({
    type: PhoneActionTypes.GET_PHONES_FULFILLED,
    phones,
}) as const;
export type GetPhonesFulfilledAction = ReturnType<typeof getPhonesFulfilled>;

export const getPhonesRejected = (errorMessage: string) => ({
    type: PhoneActionTypes.GET_PHONES_REJECTED,
    errorMessage,
}) as const;
export type GetPhonesRejectedAction = ReturnType<typeof getPhonesRejected>;

export type PhoneActions =
    | GetPhonesAction
    | GetPhonesFulfilledAction
    | GetPhonesRejectedAction
