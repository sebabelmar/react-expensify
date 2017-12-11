import React from 'react';
import UnorderedList from './UnorderedList'

/**
 * Renders list items and nested unordered list when feature.subfeatures.lenght > 0
 *
 * Dependencies :
 *  Component:
 *    UnorderedList
 *  Props:
 *    feature = {
 *     title: <string>,
 *     presence: <boolean>,
 *     subfeatures: <feature[]>
 *   }
 */

export default class ListItem extends React.Component {
  state = {
    clicked: false,
    subfeatures: []
  }

  /** Manages clicked and subfeatures state for children UL rendering **/
  handleAddUL = (e) => {
    e.stopPropagation();

    let subfeatures = this.state.clicked ? [] : this.props.feature.subfeatures;

    this.setState(()=>({ subfeatures }))
    this.setState((prevState)=>({ clicked: !prevState.clicked }))
  }
  render(){
    const displaySubfeatures = this.props.feature.subfeatures.length > 0;

    return(
      <li
        className={displaySubfeatures ? 'list-item--item__clicklable' : null}
        onClick={this.handleAddUL}
        key={Math.random()}
      >
        {
          this.props.feature.presence
           ? <i className='fa fa-check-circle list-item--icon list-item--icon__positive' aria-hidden='true'></i>
           : <i className='fa fa-times-circle list-item--icon list-item--icon__negative' aria-hidden='true'></i>
        }
        {this.props.feature.title}
        {
          this.state.subfeatures.length > 0 &&
            <UnorderedList featuresArray={this.state.subfeatures}/>
        }
      </li>
    )
  }
}
