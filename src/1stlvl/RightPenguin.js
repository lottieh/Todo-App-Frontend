import React from 'react';
import littlePenguin from '../littlePenguin.png';
class RightPenguin extends React.Component {

  render() {
    return (
      <div className="row d-none d-xl-block">
      <div className="col-2">
             
        <img className="topr" src={littlePenguin} alt="penguin"></img>
         
         </div>
         </div>
          );
        }
      }

export default RightPenguin