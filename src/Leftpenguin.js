import React from 'react';
import littlePenguin from './littlePenguin.png';
class Leftpenguin extends React.Component {

    render() {
        return (
            
            <img className="topl d-none d-md-block" src={littlePenguin} alt="penguin"></img>

        );
    }
}
export default Leftpenguin