import React from 'react';
import littlePenguin from './littlePenguin.png';
class RightPenguin extends React.Component {

  render() {
    return (<div classname="d-none d-md-4">
             
        <img className="topr" src={littlePenguin} alt="penguin"></img>
         
         </div>
          );
        }
      }

export default RightPenguin