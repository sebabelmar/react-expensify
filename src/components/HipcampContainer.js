import React from 'react';
import ListWidget from './ListWidget';
import Header from './Header';
export default class HipcampContainer extends React.Component{


  render(){
    return(
      <div>
        <Header />
        <div className='container'>
          <ListWidget />
        </div>
      </div>
    )
  }
}
