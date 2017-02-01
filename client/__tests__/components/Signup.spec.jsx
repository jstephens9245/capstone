import React from 'react';
import chai, { expect } from 'chai';
import {shallow} from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import { spy } from 'sinon';

import Signup from '../../components/Signup';

chai.use(chaiEnzyme());

describe('<Signup />', () => {
  let signupWrapper, loginLinkSpy, handleInputSpy, submitFormSpy;

  beforeEach(('create spies to pass in component', () => {
    loginLinkSpy = spy();
    handleInputSpy = spy();
    submitFormSpy = spy();
  }));

  beforeEach(() => {
    signupWrapper = shallow(
      <Signup
    changeForm={loginLinkSpy}
    handleInput={handleInputSpy}
    submitForm={submitFormSpy}/>);
  });

  it('login link in signup page should work', () => {
    signupWrapper.find('.login-link').simulate('click');
    expect(loginLinkSpy.called).to.be.true;
  });

  it('should handle inputs change in signup component', () => {
    const firstNameInput = 'Alvin';
    const signupInput = signupWrapper.find('#signup-firstname-input-field');
    signupInput.simulate('change', {target: {value: firstNameInput}});
    expect(handleInputSpy.called).to.be.true;
    expect(handleInputSpy.args[0][0].target.value).to.equal('Alvin');
  });

  it('should handle submit when user signups as new user', () => {
    const signupSubmit = signupWrapper.find('.form');
    signupSubmit.simulate('submit');
    expect(submitFormSpy.called).to.be.true;
  });
});

