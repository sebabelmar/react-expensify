import React from 'react';
import UnorderList from './UnorderList'


export default class ListItem extends React.Component{

  render(){
    return(
      <li
        onClick={(e, data)=>{}}
        hidden={this.props.hidden}
        key={Math.random()}
      >
        {this.props.feature.title}
        <UnorderList
          array={this.props.feature.subfeatures}
          hidden={false}
        />
      </li>
    )
  }
}
