import React from 'react';
import UnorderedList from './UnorderedList'


export default class ListItem extends React.Component{
  state = {
    clicked: false,
    subfeatures: []
  }
  handleAddingUL = (e) => {
    e.stopPropagation();
    let subfeatures = this.state.clicked ? [] : this.props.feature.subfeatures;
    this.setState(()=>({ subfeatures }))
    this.setState((prevState)=>({ clicked: !prevState.clicked }))
  }
  render(){
    return(
      <li
        onClick={this.handleAddingUL}
        key={Math.random()}
      >
        {this.props.feature.title}
        {
          this.state.subfeatures.length > 0 &&
          <UnorderedList
            array={this.props.feature.subfeatures}
          />
        }

      </li>
    )
  }
}
