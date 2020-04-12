import React from 'react';

const random = Math.floor(Math.random() * 2);
class Reaction extends React.Component {

    //show random action image
    render(){
    if (this.props.action !== ""){
      switch (random) {
        case 0:
          return(
            <img className="img-fluid reaction" width="167.28px" height="138.47px" src="/images/bang.svg" alt='bang'/>
          )
        case 1:
          return(
            <img className="img-fluid reaction" width="167.28px" height="138.47px" src="/images/pow.svg" alt='pow'/>
          )
        default:
          return(
            <img className="img-fluid reaction" width="167.28px" height="138.47px" src="/images/bang.svg" alt='bang'/>
          )
      }


    }
    if (this.props.action === ""){
      return null;
    }
  }
};

export default Reaction;
