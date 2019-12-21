import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <div className="row">
        <img className="topl" src={littlePenguin} alt="penguin"></img>
        
        <h1> Nailing It To Do List !</h1>
        
        <img className="topr" src={"https://cdn.pixabay.com/photo/2016/03/31/17/51/animal-1293952_1280.png"}
            alt="penguin"> </img>
        </div>
          );
        }
      }
export default Header