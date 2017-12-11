import React from 'react';
import getFeatures from '../api';

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
  createLI = (feature, index, hidden) => {
    return(
      <li
        onClick={(e, data)=>{this.handgleToggle(e, data)}}
        hidden={hidden}
        key={Math.random()}
      >
        {feature.title}
        {this.crateUL(feature.subfeatures, true)}
      </li>
    )
  }
  crateUL = (subfeatures, hidden) => {
    if (!subfeatures || subfeatures.length === 0) {
      return;
    }
    return (
      <ul>
        {subfeatures.map((feature, index) => this.createLI(feature, index, hidden))}
      </ul>
    )
  }
  render(){
    return (
      <div>
        {this.crateUL(this.state.features, false)}
      </div>
    );
  };
}
