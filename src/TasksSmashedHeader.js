import React from 'react';
import littlePenguin from './littlePenguin.png';
class Header extends React.Component {

  render() {
    return (
      <div className="row">
        <img className="topl" src={littlePenguin} alt="penguin"></img>
        
        <h1> Tasks Smashed : 5 </h1>
        
        <img className="topl" src={littlePenguin} alt="penguin"></img>
        </div>
          );
        }
      }
export default Header