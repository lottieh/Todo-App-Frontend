import React from 'react';
import littlePenguin from './littlePenguin.png';
class UndatedTasksToDoHeader extends React.Component {

  render() {
    return (
      <div className="row">
        <img className="topl" src={littlePenguin} alt="penguin"></img>
        
        <h1> Tasks to do: 3 </h1>
        
        <img className="topr" src={littlePenguin} alt="penguin"></img>
        </div>
          );
        }
      }
export default UndatedTasksToDoHeader