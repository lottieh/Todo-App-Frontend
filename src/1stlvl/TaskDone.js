import React from 'react';
import Emoji from '../Emoji';

class TaskDone extends React.Component {

    undoneClicked = () => {
        this.props.undoneTaskFunc(this.props.item.taskId,this.props.item.description);
}
    render() {
        return (

            <div >
                <div className ="col-6 col-md-2">
                    <li>
                        {this.props.item.description}
                       <span> <button type="button" onClick={this.undoneClicked}> <Emoji symbol="&#x2B06;" label="Cross" /> </button>
                   </span> </li>
            


                </div>
            </div>
        )
    }
}
export default TaskDone
