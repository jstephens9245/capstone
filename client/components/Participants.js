import React from 'react';

export default function(props){
  return (
     <div className="participants-container">
          <div className="participant-number-container">
            <span className="participant-number">
              <i className="glyphicon glyphicon-globe"></i>
              {props.totalParticipants} Users Online
            </span>
          </div>
          <div className="participant-list-container">
            <ul className="participant-list">
              {props.participants.map(participant => {
                return <li className="participant-item"
                            key={participant.id}>
                            <div className="participant">
                              <i className="glyphicon glyphicon-user"></i>
                              {participant.name}
                            </div>
                        </li>;
              })}
            </ul>
          </div>
      </div>
  );
}
