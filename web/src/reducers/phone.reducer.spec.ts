import reducer, {PhoneState} from './phone.reducer';
import {getPhones, getPhonesFulfilled, getPhonesRejected, selectPhone} from "../actions/phone.actions";
import {buildPhone} from "../testHelpers/build-phone";

describe('Phone reducer', function () {

    describe('Get Phones', () => {
        it('identifies that a request getting phones has been made ', () => {
            const initialState = createState({loading: false});

            const updatedState = reducer(initialState, getPhones());

            expect(updatedState).toEqual({
                ...initialState, loading: true
            });
        });
    });

    describe('Get Phones Successfully', () => {
        it('identifies that a request getting phones end correctly', () => {
            const aPhoneList = [buildPhone({id: 1}), buildPhone({id:30})];
            const initialState = createState({loading: true, phones: []});

            const updatedState = reducer(initialState, getPhonesFulfilled(aPhoneList));

            expect(updatedState).toEqual({
                ...initialState,
                loading: false,
                phones: aPhoneList
            });
        });

        it('override the phone list with request correctly', () => {
            const initialPhones = [buildPhone({id: 1}), buildPhone({id:30})];
            const expectedPhones = [buildPhone({id: 3}), buildPhone({id:50})];
            const initialState = createState({loading: true, phones: initialPhones});

            const updatedState = reducer(initialState, getPhonesFulfilled(expectedPhones));

            expect(updatedState).toEqual({
                ...initialState,
                loading: false,
                phones: expectedPhones
            });
        });

        it('remove the error message when everything works fine', () => {
            const expectedPhones = [buildPhone({id: 3}), buildPhone({id:50})];
            const initialState = createState({loading: true, errorMessage: 'An error happen'});

            const updatedState = reducer(initialState, getPhonesFulfilled(expectedPhones));

            expect(updatedState).toEqual({
                ...initialState,
                loading: false,
                phones: expectedPhones,
                errorMessage: undefined
            });
        });
    });

    describe('Get Phones Fail', () => {
        it('identifies that a request getting phones end with failure without override current phones', () => {
            const initialPhones = [buildPhone({id: 3}), buildPhone({id:50})];
            const initialState = createState({loading: true, phones: initialPhones});
            const expectedError = 'An error happen';

            const updatedState = reducer(initialState, getPhonesRejected(expectedError));

            expect(updatedState).toEqual({
                ...initialState,
                loading: false,
                errorMessage: expectedError
            });
        });

        it('override the error message when can not retrieve the phone list', function () {
            const initialState = createState({loading: true, errorMessage: 'Initial error'});
            const expectedErrorMessage = 'An error happen';
            const updatedState = reducer(initialState, getPhonesRejected(expectedErrorMessage));

            expect(updatedState).toEqual({
                ...initialState,
                loading: false,
                errorMessage: expectedErrorMessage
            });
        });
    });


    describe('Select phone', function () {
        it('select a phone', () => {
            const initialState = createState({loading: true});
            const expectedSelectedPhone = 1;

            const updatedState = reducer(initialState, selectPhone(expectedSelectedPhone));

            expect(updatedState).toEqual({
                ...initialState,
                selectedPhone: expectedSelectedPhone
            });
        });
    });

    const createState = ({
        loading = false,
        phones= [],
        selectedPhone = 0,
        errorMessage
    }: Partial<PhoneState>): PhoneState => ({
        errorMessage,
        selectedPhone,
        phones,
        loading
    })

});
