import React from 'react';
import ListItem from './listItem.jsx';

const list = props => {
  return (
    <div>
      {props.characters.map((item, index) => <ListItem key={index} character={item}/>)}
    </div>
  )
}

export default list;