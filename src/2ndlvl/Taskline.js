import React from 'react';

class Taskline extends React.Component {

  deleteClicked = () => {
    this.props.deleteTaskFunc(this.props.item.id);
  }
  editClicked = () => {
    alert("Want to edit ?");
  }
  starClicked = () => {
    this.props.importantTaskFunc(this.props.item.id);
  }
  doneClicked = () => {
    this.props.compTaskFunc(this.props.item.id);

  }

  render() {
    let description;
   
    if (this.props.item.important) {
      description = (
        <div className="col-4  important" > {this.props.item.description} </div>);
    } else {
      description = (
        <div className="col-4"> {this.props.item.description} </div>);
    };
    return (

      <div className='row taskline' >

        {/*Task*/}
        < div className="col-4" >
          {description}
        </div>

        {/*Important*/}

        < div className="col-6 col-md-2" >
          {!this.props.item.important && (
            <button type="button" onClick={this.starClicked}> &#9733; </button>
          )}
        </div>

        {/*Edit*/}
        < div className="col-6 col-md-2" >
          <button type="button" onClick={this.editClicked}> &#x270E; </button>
        </div >

        {/*Delete*/}

        < div className="col-6 col-md-2" >
          <button type="button" onClick={this.deleteClicked}> &#10060; </button>
        </div >

        {/*Smashed It*/}
        < div className="col-6 col-md-2" >
          <button type="button" onClick={this.doneClicked}> Smashed It !</button>
        </div >

      </div >
    );
  }
}

export default Taskline