import React from 'react';
import campsApi from '../api';
import UnorderedList from './UnorderedList'

export default class ListWidget extends React.Component{

  state = {
    features: []
  }
  componentDidMount(){
    campsApi.getFeatures()
      .then((features) => this.setState(() => ({ features })));
  }
  render(){
    return (
      <div className='list-widget--first-level '>
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
