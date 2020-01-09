import React from 'react';
import Leftpenguin from '../1stlvl/Leftpenguin';
import Header from '../1stlvl/Header';
import RightPenguin from '../1stlvl/RightPenguin';

class Headernest extends React.Component {

    render() {
        return (
            <div className='row'>
                
                <Leftpenguin />
                <Header />
                <RightPenguin />

            </div>

        )
    }
}
export default Headernest
