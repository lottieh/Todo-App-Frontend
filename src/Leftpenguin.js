import React from 'react';
import littlePenguin from './littlePenguin.png';
class Leftpenguin extends React.Component {

    render() {
        return (
            <div classname=" col-4 d-none ">

            <img className="topl" src={littlePenguin} alt="penguin"></img>
        </div>
        );
    }
}
export default Leftpenguin