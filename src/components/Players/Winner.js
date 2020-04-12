import React from 'react';
import './Winner.css';
import { Life } from './Life';

var winnaar = false;
var margin ={};
export class Winner extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event){
    event.preventDefault();
    this.props.restart(true);
  }
  render(){
  if (this.props.message === 'Gefeliciteerd jij bent de winnaar!'){
    winnaar = true;
  } else {
    winnaar = false;
  };
  if (this.props.lastWeapon === 'paper') {
     margin = { marginLeft: "-20px" };
  } else {
    margin = {};
  };

  return(
    <div className='winner'>
      <div className="row">
        <div className="col resultaatLbl">
          {this.props.message}
        </div>
      </div>
      <div className="row">
          { winnaar ?
          <img className="img-fluid mx-auto" width="167.28px" height="138.47px" src="/images/Wow.svg" alt="Wow"/> : <div style={{height:138}}></div> }

      </div>
      <div className="row">
        <div className="col">

          { winnaar ?
            <div style={{ height:250, width: 250 }} className="placeHolder rounded-circle">
              <img style={margin} className="img-fluid userImg" src={'/images/' + this.props.lastWeapon +'.svg'} alt="Rock" width={this.props.lastWeapon === 'scissors' ? 90 : 150 }/>
            </div> :
            <div style={{ height:250, width: 250, background: 'transparent' }} className=" placeHolder rounded-circle"> <img className="img-fluid userImg" src="/images/sadd.svg" alt="Sadd" width="150px"/></div>
            }

          <Life player='user' life={this.props.life} />
        </div>
      </div>
      <div className="row">
        <div className="col grey bottom">
          <a className="playAgain" href="/" onClick={this.handleClick}>Nogmaals spelen?</a>
        </div>
      </div>
    </div>
  )
  }
}
