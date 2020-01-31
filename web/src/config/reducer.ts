import { combineReducers } from 'redux';
import {DefaultRootState} from 'react-redux';
import phones, {PhoneState} from "../reducers/phone.reducer";

export type RootApplicationState = {
    phones: PhoneState,
} & DefaultRootState;

export default combineReducers({
    phones
});
