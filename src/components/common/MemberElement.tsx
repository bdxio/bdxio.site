import React, { useState } from 'react';
import { Member } from '../../models/Member';

interface PropsType {
  member: Member;
  isAtRight?: boolean;
  isSpeaker?: boolean;
}

const MemberElement = ({
  member,
  isAtRight = false,
  isSpeaker = false
}: PropsType) => {
  const hasSocialLink =
    !!member.contact &&
    (!!member.contact.linkedin ||
      !!member.contact.twitter ||
      !!member.contact.website);

  const onClick = () => {
    if (isSpeaker) {
      //TODO:
    }
  };

  return (
    <div
      className={`row collapse small-12 large-6 align-center users-container-content-item ${
        isAtRight ? 'alternative' : ''
      }`}
      onClick={onClick}
    >
      {!isAtRight && (
        <div className="columns small-6 users-container-content-item-picture">
          <img src={member.avatar.primary} className="initial-image" />
          <img
            src={member.avatar.hover || member.avatar.primary}
            className="hover-image"
          />
        </div>
      )}
      <div className={`columns text-center auto users-container-content-item-text${isSpeaker ? '-speaker' : ''}`}>
        <h6>{member.displayName}</h6>
        <div className="users-container-content-item-text-bio text-center">
          {member.bio}
        </div>
        <div className={`text-center ${!hasSocialLink ? 'noLink' : ''}`}>
          <hr />
          {member.contact && member.contact.twitter && (
            <span>
              <a
                href={`https://twitter.com/${member.contact.twitter}`}
                target="_blank"
              >
                <i className="users-container-content-item-text-socialNetwork fa fa-twitter" />
              </a>
            </span>
          )}
          {member.contact && member.contact.linkedin && (
            <span>
              <a href={member.contact.linkedin} target="_blank">
                <i className="users-container-content-item-text-socialNetwork fa fa-linkedin" />
              </a>
            </span>
          )}
          {member.contact && member.contact.website && (
            <span>
              <a href={member.contact.website} target="_blank">
                <i className="users-container-content-item-text-socialNetwork fa fa-globe" />
              </a>
            </span>
          )}
        </div>
      </div>
      <span className="user-card-arrow" />
      {isAtRight && (
        <div className="columns small-6 users-container-content-item-picture">
          <img src={member.avatar.primary} className="initial-image" />
          <img
            src={member.avatar.hover || member.avatar.primary}
            className="hover-image"
          />
        </div>
      )}
    </div>
  );
};

export default MemberElement;
