import React from 'react';
import campsApi from '../api';
import ListWidget from './ListWidget';
import Header from './Header';

/**
 * Represents the environmet where the ListWidget would be use and the API for
 * features would be made.
 *
 * Dependencies :
 *  Api:
 *   campsApi
 *     getFeatures() contract:
 *       returns feature[]
 *       feature = {
 *         title: <string>,
 *         presence: <boolean>,
 *         subfeatures: <feature[]>
 *       }
 *  Component:
 *    ListWidget
 *  State:
 *    featuresArray <feature[]>
 */

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
