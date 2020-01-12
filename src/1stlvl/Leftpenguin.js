import React from 'react';
import littlePenguin from '../littlePenguin.png';
class Leftpenguin extends React.Component {

  render() {
    return (

      <div className="row d-none d-md-block">
        <div className="col-4">

          <img className="topl" src={littlePenguin} alt="penguin"></img>

        </div>
      </div>
    );
  }
}

export default Leftpenguin;