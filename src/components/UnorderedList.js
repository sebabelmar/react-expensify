import React from 'react';
import ListItem from './ListItem';

export default class UnorderedList extends React.Component {

  render(){
    let listItems =  this.props.array.map((feature) => (
      <ListItem
        key={Math.random()}
        feature={feature}
        hidden={this.props.hidden}
      />)
    )

    return (
      <ul>
        {this.props.array.length > 0 && listItems}
      </ul>
    )
  }
}
