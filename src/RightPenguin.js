import React from 'react';
import littlePenguin from './littlePenguin.png';
class RightPenguin extends React.Component {

  render() {
    return (<div classname=" col-4 d-none d-md-block">
             
        <img className="topr" src={littlePenguin} alt="penguin"></img>
         
         </div>
          );
        }
      }

export default RightPenguin