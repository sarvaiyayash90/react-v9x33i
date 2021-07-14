import React, { useRef } from 'react';

const AddMovies = props => {
  const titleRef = useRef();
  const openingTextRef = useRef();
  const releaseDateRef = useRef();

  const callthisbtn = e => {
    e.preventDefault();

    const data = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value
    };
    // console.log('data', data);
    props.addMoviesData(data);
    // titleRef = '';
    // openingTextRef = '';
    // releaseDateRef = '';
  };

  return (
    <div>
      <label htmlFor="Title">Title</label>&nbsp;
      <input type="text" id="title" ref={titleRef} />
      <label htmlFor="Opening Text">Opening Text</label>
      <textarea rows="5" id="opening-text" ref={openingTextRef} />
      <label htmlFor="date">Release date</label>
      <input type="date" id="date" ref={releaseDateRef} />
      <button onClick={callthisbtn}>Add New Movies </button>
    </div>
  );
};

export default AddMovies;
