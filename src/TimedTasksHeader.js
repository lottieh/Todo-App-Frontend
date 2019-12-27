import React from 'react';
import littlePenguin from './littlePenguin.png';
class TimedTasksHeader extends React.Component {

  render() {
    return (
      <div className="row">
        <img className="topl" src={littlePenguin} alt="penguin"></img>
        
        <h1> Timed Tasks to Do: 2</h1>
        
        <img className="topl" src={littlePenguin} alt="penguin"></img>
        </div>
          );
        }
      }
export default TimedTasksHeader