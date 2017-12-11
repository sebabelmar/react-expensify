import React from 'react';
import UnorderedList from './UnorderedList'


export default class ListItem extends React.Component{

  render(){
    return(
      <li
        onClick={(e, data)=>{}}
        hidden={this.props.hidden}
        key={Math.random()}
      >
        {this.props.feature.title}
        <UnorderedList
          array={this.props.feature.subfeatures}
          hidden={false}
        />
      </li>
    )
  }
}
