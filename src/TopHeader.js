import React from 'react';
import Leftpenguin from './Leftpenguin';
import Header from './Header';
import RightPenguin from './RightPenguin';

class Topheader extends React.Component {

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
export default Topheader
