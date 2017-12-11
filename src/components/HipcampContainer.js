import React from 'react';
import campsApi from '../api';
import ListWidget from './ListWidget';
import Header from './Header';
export default class HipcampContainer extends React.Component{

  state = {
    features: []
  }
  componentDidMount(){
    campsApi.getFeatures()
    .then((features) => this.setState(() => ({ features })));
  }
  render(){
    return(
      <div>
        <Header />
        <div className='container'>
          {
            this.state.features.length > 0
              ? <ListWidget featuresArray={this.state.features}/>
              : <p className='hipcamp-container--message'> This campsite has no features :(</p>
          }
        </div>
      </div>
    )
  }
}
