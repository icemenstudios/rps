import React from 'react';

export const Weapon = (props) => {
    if (props.tool === 'rock') {
      return (
        <img className="img-fluid userImg" src="/images/Rock.svg" alt="Rock" width="79.69px"/>
      )
    }
    if (props.tool === 'paper') {
      return (
        <img className="img-fluid userImg" src="/images/paper.svg" alt="Paper" width="79.69px" height="107.8px"/>
      )
    }
    if (props.tool === 'scissors') {
      return (
        <img className="img-fluid userImg" src="/images/scissors.svg" alt="Scissors" width="51.03px" height="114.86px"/>
      )
      }
    if (props.tool === 'empty') {
      return  null;
    }
};
