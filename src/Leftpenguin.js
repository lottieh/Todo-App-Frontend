import React from 'react';
import littlePenguin from './littlePenguin.png';
class Leftpenguin extends React.Component {

    render() {
        return (
            <div className=" col-4 d-none ">

            <img className="topl" src={littlePenguin} alt="penguin"></img>
        </div>
        );
    }
}
export default Leftpenguin