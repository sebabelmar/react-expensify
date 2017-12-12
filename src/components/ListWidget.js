import React from 'react';
import PropTypes from 'prop-types';
import UnorderedList from './UnorderedList'

/**
 * Renders first level of list items using UnorderedList component
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
      (props.featuresArray instanceof Array && props.featuresArray.length > 0) &&
        <UnorderedList featuresArray={props.featuresArray}/>
    }
  </div>
)

ListWidget.propTypes = {
  featuresArray: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    presence: PropTypes.bool,
    subfeatures: PropTypes.array
  }))
}

export default ListWidget;
