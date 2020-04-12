import React from 'react';
//import './Results.css';

export const Results = (props) => {
    return (
      <div className="row">
        <div className="col resultaatLbl">
          { props.message }
        </div>
      </div>
  )
};
