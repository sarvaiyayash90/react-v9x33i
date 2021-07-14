import React from 'react';

const NewData = props => {
  const newname = () => {
    props.onAdddata('jay bhole');
  };

  return <button onClick={() => newname()}>Click me...</button>;
};

export default NewData;
