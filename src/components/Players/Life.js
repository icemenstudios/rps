import React from 'react';

export const Life = (props) => {
    const player = props.player;
    if (props.life === 0){
      return (
        <div></div>
      )
    } else if (props.life === 2){
      return (
        <div className={`col life ${player}`}>
          <img id={`${player}Life1`} className="img-fluid" width="18px" height="17px" src="/images/life.svg" alt="life"/>
          <img id={`${player}Life2`} className="img-fluid" width="18px" height="17px" src="/images/life.svg" alt="life"/>
        </div>
      )
    } else if(props.life === 1){
      return (
        <div className={`col life ${player}`}>
          <img id={`${player}Life1`} className="img-fluid" width="18px" height="17px" src="/images/life.svg" alt="life"/>
        </div>
      )
    } else {
    return(
      <div className={`col life ${player}`}>
        <img id={`${player}Life1`} className="img-fluid" width="18px" height="17px" src="/images/life.svg" alt="life"/>
        <img id={`${player}Life2`} className="img-fluid" width="18px" height="17px" src="/images/life.svg" alt="life"/>
        <img id={`${player}Life3`} className="img-fluid" width="18px" height="17px" src="/images/life.svg" alt="life"/>
      </div>
    )
    }
};
