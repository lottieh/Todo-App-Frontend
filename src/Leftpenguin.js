import React from 'react';
import littlePenguin from './littlePenguin.png';
class Leftpenguin extends React.Component {

    render() {
        return (
            <div className=" hidden=col-m-down col-md-4">

            <img className="topl" src={littlePenguin} alt="penguin"></img>
        </div>
        );
    }
}
export default Leftpenguin