import React from 'react';
import chai, { expect } from 'chai';
import {shallow} from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import { spy } from 'sinon';

import { socketEmit, socketConnect, addSocketListener, clearSocketListeners } from '../../actions/socketio';
import store from '../../store';

// import { ParticipantsContainer } from '../../containers/ParticipantsContainer';

// jest.mock('../../containers/ParticipantsContainer');
import { ParticipantsContainer } from '../../containers/ParticipantsContainer';

chai.use(chaiEnzyme());

const user = {id: 1, first_name: 'Alvin', last_name: 'Yuen'};
const params = {room: 'ABCD'};

describe ('<ParticipantsContainer /> ', () => {
  let participantsContainerWrapper;
  let socketEmitSpy, socketConnectSpy, addSocketListenerSpy, clearSocketListenerSpy;
  beforeEach(() => {
    socketEmitSpy = spy();
    socketConnectSpy = spy();
    addSocketListenerSpy = spy();
    const addSocketListener = (eventName, addSocketListenerSpy) => {};
    clearSocketListenerSpy = spy();

    participantsContainerWrapper = shallow(<ParticipantsContainer loggedInUser={user}
    socketEmit={socketEmitSpy}
    socketConnect={socketConnectSpy}
    addSocketListener={addSocketListener}
    clearSocketListeners={clearSocketListenerSpy}
    params={params} />);
  });

  it('<ParticipantContainer /> should exist', () => {
    console.log('TESTING SPY', addSocketListener);
    addSocketListenerSpy.withArgs({name: 'Alvin'}, 1);
    // expect(addSocketListenerSpy.called).to.be.true;
    // participantsContainerWrapper.setState({ totalParticipants: 1});
    // expect(participantsContainerWrapper).to.have.state('totalParticipants', 1);
    // expect(participantsContainerWrapper.find('.participant')).to.not.exist;
  });

  // it('<ParticipantsContainer /> should have exactly 2 users', () => {
  //   participantsContainerWrapper.setState({ participants: [ 'Alvin', 'Hal' ]});
  //   participantsContainerWrapper.setState({ totalParticipants: 2 });
  //   expect(participantsContainerWrapper).to.have.exactly(2).descendants('participant');
  // });
});
