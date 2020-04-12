import React from 'react';
import './Buttons.css';

export const Buttons = (props) => {
    return (
        <div className="row actionBtn">
            <button className="col grow" onClick={props.onClickRock}>
              <img className="img-fluid" src="/images/Rock.svg" alt="Rock" width="79.69px" />
            </button>
            <button className="col mx-auto" onClick={props.onClickPaper}>
              <img className="img-fluid" src="/images/Paper.svg" alt="Paper" height="115px" width="85.64px"/>
            </button>
            <button className="col" onClick={props.onClickScissors}>
              <img className="img-fluid" src="/images/Scissors.svg" alt="Scissors" height="115px" width="51.06px" />
            </button>
        </div>
    );
}
