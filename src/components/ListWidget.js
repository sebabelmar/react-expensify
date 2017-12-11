import React from 'react';
import UnorderedList from './UnorderedList'

/**
 * Reders first level of list items using UnorderedList component
 *
 * Dependencies :
 *  Component:
 *    UnorderedList
 *  Props:
 *    featuresArray <feature[]>
 */

const ListWidget = (props) => (
  <div className='list-widget--first-level'>
    {
      props.featuresArray.length > 0 &&
        <UnorderedList featuresArray={props.featuresArray}/>
    }
  </div>
)

export default ListWidget;
