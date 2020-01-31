import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Phones} from './';
import {phoneRepository, PhoneRepository} from "../../repositories/PhoneRepository";
import {Phone} from "../../models/Phone";
import {buildPhone} from "../../testHelpers/build-phone";

describe('Phones', () => {

  let phoneRepositoryMock: PhoneRepository;

  beforeEach(() => {
    phoneRepositoryMock = phoneRepository;
  });

  it('display a message when list of phones is empty', function () {
    phoneRepositoryMock.getPhones = jest.fn(() => Promise.resolve([]));

    const renderResult: RenderResult = render(
        <Phones phoneRepository={phoneRepositoryMock}/>,
    );

    expect(renderResult.queryByText('Sorry, the list is empty')).toBeTruthy();
  });

  it('display an error when list of phones can\'t be retrieved', function () {
    phoneRepositoryMock.getPhones = jest.fn(() => Promise.reject('Connection refused'));

    const renderResult: RenderResult = render(
        <Phones phoneRepository={phoneRepositoryMock}/>,
    );

    expect(renderResult.queryByText('Connection refused')).toBeTruthy();
  });

  it('display the list of phones', () => {

    const aPhoneOne: Phone = buildPhone({id: 1, name:"irrelevant phone 1"});
    const aPhoneTwo: Phone = buildPhone({id: 2, name:"irrelevant phone 2"});
    phoneRepositoryMock.getPhones = jest.fn(() => Promise.resolve([aPhoneOne, aPhoneTwo]));

    const renderResult: RenderResult = render(
      <Phones phoneRepository={phoneRepositoryMock}/>,
    );

    const phoneOneName = renderResult.queryByText(aPhoneOne.name)?.textContent || 'Not found';
    const phoneTwoName = renderResult.queryByText(aPhoneTwo.name)?.textContent || 'Not found';

    expect(phoneOneName).toEqual(aPhoneOne.name);
    expect(phoneTwoName).toEqual(aPhoneTwo.name);
  });

});
