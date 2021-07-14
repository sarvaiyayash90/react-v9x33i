import React from 'react';

const ListItem = props => {
  const remove = id => {
    // console.log('id' + id);
    props.NewRemoveData(id);
  };

  return (
    <>
      <li style={{ listStyle: 'none' }}>
        Id : {props.id}
        <br />
        Title : {props.title}&nbsp;&nbsp; <br />
        Opening Text : {props.openingText}&nbsp;&nbsp;
        <br />
        releaseDate : {props.releaseDate}&nbsp;&nbsp;
        <br />
        <button onClick={() => remove(props.id)}>delete</button>
        <hr />
      </li>
    </>
  );
};

export default ListItem;
