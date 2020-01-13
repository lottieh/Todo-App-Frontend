import React from 'react';
import Penguin2 from '../Penguin2.png';
class NailingItPenguin extends React.Component {

    render() {
        return (
            <div className="row d-none d-xl-block">
                <div className="col-12 col-md-6 penguin_image">
                    <img src={Penguin2} width="250"
                        alt="You're Nailing it penguin">

                    </img>
                </div>
            </div>
        )
    }
}
export default NailingItPenguin
