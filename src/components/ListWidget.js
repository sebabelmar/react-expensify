import React from 'react';
import UnorderedList from './UnorderedList'

const ListWidget = (props) => (
  <div className='list-widget--first-level'>
    {
      props.featuresArray.length > 0 &&
        <UnorderedList featuresArray={props.featuresArray}/>
    }
  </div>
)

export default ListWidget;
