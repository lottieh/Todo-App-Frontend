import React from 'react';
import nailingitpenguin from '../nailingitpenguin.jpg';
class NailingItPenguin extends React.Component {

    render() {
        return (
            <div className="row d-none d-xl-block">
                <div className="col-12 col-md-6 penguin_image">
                    <img src={nailingitpenguin} width="250"
                        alt="You're Nailing it penguin">

                    </img>
                </div>
            </div>
        )
    }
}
export default NailingItPenguin
