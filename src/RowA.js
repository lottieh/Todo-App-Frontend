import React from 'react';
import Toplpenguin from './Leftpenguin';
import RightPenguin from './RightPenguin';
import Header from './Header';

class RowA extends React.Component {

  render() {
    return (
      <div className="RowA">
        <Toplpenguin />
        <Header />
        <RightPenguin />
        </div>
          );
        }
      }
export default RowA