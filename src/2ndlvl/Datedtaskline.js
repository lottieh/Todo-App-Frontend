import React from 'react';

class Datedtaskline extends React.Component {


  deleteClicked = () => {
    this.props.deleteTaskFunc(this.props.item.id);
  }
  editClicked = () => {
    alert("Want to edit ?");
  }
  starClicked = () => {
    alert("Is this important ?");
  }
  doneClicked = () => {
    alert("Done already? Good Job!");
  }

  render() {
    return (

      <div className='row taskline'>
        
          {/*Date*/}

          <div className="col-6 col-md-12">
            03/01/2019
          </div>

          {/*Task*/}

          <div className="col-4">

            {this.props.item.description}

          </div>


          {/*Edit*/}
          <div className="col-6 col-md-2">

            <button type="button" onClick={this.editClicked}> &#x270E; </button>

          </div>

          {/*Important*/}

          <div className="col-6 col-md-2">
            <button type="button" onClick={this.starClicked}> &#9733; </button>


          </div>

          {/*Delete*/}

          <div className="col-6 col-md-2">

            <button type="button" onClick={this.deleteClicked}> &#10060; </button>


          </div>


          {/*Smashed It*/}
          <div className="col-6 col-md-2">

            <button type="button" onClick={this.doneClicked}> Smashed It !</button>


          </div>


        </div>

     
    );
  }
}
export default Datedtaskline