import React from 'react';
import getFeatures from '../api';
import UnorderedList from './UnorderedList'

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
          <UnorderedList
            array={this.state.features}
            hidden={false}
          />
        }
      </div>
    );
  };
}
