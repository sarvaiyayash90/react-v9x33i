import React from 'react';
import ListItem from './ListItem';

const List = props => {
  return (
    <ul>
      {props.items.map(item => (
        <ListItem
          id={item.id}
          key={item.id}
          title={item.title}
          openingText={item.openingText}
          releaseDate={item.releaseDate}
          NewRemoveData={props.removeData}
        />
      ))}
    </ul>
  );
};

export default List;
