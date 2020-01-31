import * as React from 'react';
import { RenderResult } from '@testing-library/react';
import {Phones} from './';
import {phoneRepository, PhoneRepository} from "../../repositories/PhoneRepository";
import {Phone} from "../../models/Phone";
import {buildPhone} from "../../testHelpers/build-phone";
import {PhonesMessages} from "./Phones";
import {PhoneItemRole} from "../../components/PhoneItem/PhoneItem";
import {renderWithRedux} from "../../testHelpers/render-redux";

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

  it('display the list of phones', async () => {

    const aPhoneOne: Phone = buildPhone({id: 1, name:"irrelevant phone 1"});
    const aPhoneTwo: Phone = buildPhone({id: 2, name:"irrelevant phone 2"});
    const aVideoList = [aPhoneOne, aPhoneTwo];
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

});
