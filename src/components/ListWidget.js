import React from 'react';
import getFeatures from '../api';
import UnorderList from './UnorderList'

export default class ListWidget extends React.Component{

  state = {
    features: [],
  }
  featureLevel = 1;
  componentDidMount(){
    getFeatures()
      .then((features) => this.setState(() => ({ features })));
  }
  handgleToggle = (e, data) => {
    console.log(e, data)
  }
  render(){
    return (
      <div>
        {
          this.state.features.length > 0 &&
          <UnorderList
            array={this.state.features}
            hidden={false}
          />
        }
      </div>
    );
  };
}
