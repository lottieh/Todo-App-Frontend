import React from 'react';

class Tasks extends React.Component {
    
    render() {
        return (
            <div>
                <div className="col-6">{this.props.taskDescription}</div>
                  {/*Task*/}

                 {/*Edit*/}
          <div className="col-6 col-md-2">

            <button type="button"> &#x270E; </button>

          </div>

{/*Important*/}
       
         <div className="col-6 col-md-1">
          <button type="button"> &#9733; </button>


        </div>

        {/*Smashed It*/}
        <div className="col-6 col-md-2">

          <button type="button"> Smashed It !</button>


        </div>
        </div>
        
        )}}


    export default Tasks
