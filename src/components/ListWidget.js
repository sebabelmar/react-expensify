import React from 'react';
import UnorderedList from './UnorderedList'

export default class ListWidget extends React.Component{
  render(){
    return (
      <div className='list-widget--first-level'>
        {
          this.props.featuresArray.length > 0 &&
            <UnorderedList featuresArray={this.props.featuresArray}/>
        }
      </div>
    );
  };
}
