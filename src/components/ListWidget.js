import React from 'react';
import getFeatures from '../api';
import UnorderedList from './UnorderedList'

export default class ListWidget extends React.Component{

  state = {
    features: []
  }
  componentDidMount(){
    getFeatures()
      .then((features) => this.setState(() => ({ features })));
  }
  render(){
    return (
      <div>
        {
          this.state.features.length > 0 &&
          <UnorderedList
            array={this.state.features}
          />
        }
      </div>
    );
  };
}
