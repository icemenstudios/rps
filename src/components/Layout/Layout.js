import React from 'react';
import Players from '../Players/Players';


export const Layout = (props) => {

    return(
      <div>
        <Players userName={props.userName} />
      </div>
    )
}
