import * as React from 'react';
import { fireEvent, RenderResult } from '@testing-library/react';
import {Phones} from './';
import {phoneRepository, PhoneRepository} from "../../repositories/PhoneRepository";
import {Phone} from "../../models/Phone";
import {buildPhone} from "../../testHelpers/build-phone";
import {PhonesMessages} from "./Phones";
import {PhoneItemRole} from "../../components/PhoneItem/PhoneItem";
import {getTestMiddleware, renderWithRedux} from "../../testHelpers/render-redux";
import {createStore} from "redux";
import reducer from "../../config/reducer";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";

describe('Phones', () => {

  let phoneRepositoryMock: PhoneRepository;

  beforeEach(() => {
    phoneRepositoryMock = phoneRepository;
  });

  it('display a message when list of phones is empty', () => {
    phoneRepositoryMock.getPhones = jest.fn(() => Promise.resolve([]));

    const renderResult: RenderResult = renderWithRedux(
          <Phones phoneRepository={phoneRepositoryMock}/>
    );

    expect(renderResult.queryByText(PhonesMessages.EMPTY_LIST)).toBeTruthy();
  });

  it('display an error when list of phones can\'t be retrieved', async () => {
    const errorMessage = 'Connection refused';
    phoneRepositoryMock.getPhones = jest.fn(() => Promise.reject(errorMessage));

    const renderResult: RenderResult = renderWithRedux(
        <Phones phoneRepository={phoneRepositoryMock}/>,
    );

    expect(await renderResult.findByText(errorMessage)).toBeTruthy();
  });

  describe('the list', function () {

    const aPhoneOne: Phone = buildPhone({id: 1, name:"irrelevant phone 1"});
    const aPhoneTwo: Phone = buildPhone({id: 2, name:"irrelevant phone 2"});
    const aVideoList = [aPhoneOne, aPhoneTwo];

    it('display the list of phones', async () => {
      phoneRepositoryMock.getPhones = jest.fn(() => Promise.resolve(aVideoList));

      const renderResult: RenderResult = renderWithRedux(
          <Phones phoneRepository={phoneRepositoryMock}/>
      );

      const phoneOneName = (await renderResult.findByText(aPhoneOne.name)).textContent;
      const phoneTwoName = (await renderResult.findByText(aPhoneTwo.name)).textContent;

      const videos = await renderResult.findAllByRole(PhoneItemRole);

      expect(videos.length).toBe(aVideoList.length);
      expect(phoneOneName).toEqual(aPhoneOne.name);
      expect(phoneTwoName).toEqual(aPhoneTwo.name);
    });

    it('select an element when is clicked', async () => {
      phoneRepositoryMock.getPhones = jest.fn(() => Promise.resolve(aVideoList));
      const store = createStore(reducer, composeWithDevTools(getTestMiddleware()));

      const renderResult: RenderResult = renderWithRedux(
          <Phones phoneRepository={phoneRepositoryMock}/>,
          store
      );

      const displayedPhones = await renderResult.findAllByRole(PhoneItemRole);
      // We assume that the second item in the array is the Phone 2
      await fireEvent.click(displayedPhones[1]);
      expect(store.getState().phones.selectedPhone).toBe(2);
    });

  });



});
