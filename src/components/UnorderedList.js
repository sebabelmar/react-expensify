import React from 'react';
import ListItem from './ListItem';

const UnorderedList = (props) => {
  {
    let listItems =  props.featuresArray.map((feature) => (
      <ListItem
        key={Math.random()}
        feature={feature}
      />)
    )

    return (
      <ul>
        {
          props.featuresArray.length > 0 && 
            listItems}
      </ul>
    )
  }
};

export default UnorderedList;
