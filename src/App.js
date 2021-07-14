import React, { useState, useEffect, useCallback } from 'react';
import './style.css';
// import Myname, { NewApp, NewApp_new } from './NewApp';
import * as MYdata from './NewApp';
import List from './List';
import AddMovies from './AddMovie';
import NewData from './NewData';

const allData = [
  {
    id: 'a1',
    name: 'sanket'
  },
  {
    id: 'a2',
    name: 'Kalpesh'
  },
  {
    id: 'a3',
    name: 'Nilesh'
  },
  {
    id: 'a4',
    name: 'Vishal'
  },
  {
    id: 'a5',
    name: 'Sachin'
  }
];

export default function App() {
  const [data, setdata] = useState([]);
  const [newname, setname] = useState('yash');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const setNameHandler = name => {
    // console.log('name is ', name);
    let namedata = newname;
    namedata === 'yash' ? setname(name) : setname('yash');
  };

  const remove = id => {
    const dd = data.filter(val => {
      return val.id !== id;
    });
    setdata(dd);
  };

  const fetchDataHandler = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // const response = await fetch('https://swapi.dev/api/films/');
      const response = await fetch(
        'https://react-demo-bc807-default-rtdb.firebaseio.com/movies.json'
      );
      if (!response.ok) {
        throw new Error('Something Went Wrong!');
      }
      const data = await response.json();

      const loadData = [];

      for (const key in data) {
        loadData.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        });
      }
      setdata(loadData);
      // const newData = data.results.map(item => {
      //   return {
      //     id: item.episode_id,
      //     title: item.title,
      //     openingText: item.opening_crawl,
      //     releaseDate: item.release_date
      //   };
      // });
      // console.log('dassasas', newData);
      // setdata(newData);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  let content = <p>found No data...</p>;

  if (data.length > 0) {
    content = <List items={data} removeData={remove} />;
  }

  if (loading) {
    content = <p>loading...</p>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  const addMoviesHandler = async addNewData => {
    // console.log('new_____', addNewData);
    try {
      const response = await fetch(
        'https://react-demo-bc807-default-rtdb.firebaseio.com/movies.json',
        {
          method: 'POST',
          body: JSON.stringify(addNewData),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      if (!response.ok) {
        throw new Error('Something Went Wrong!');
      }
      const data = await response.json();
    } catch (error) {
      console.log('Error____', error);
    }
    // console.log('New-------------', data);
  };

  return (
    <div>
      <MYdata.default />
      <MYdata.NewApp_new />
      <MYdata.NewApp />
      {MYdata.datadata}
      <NewData onAdddata={setNameHandler} />
      &nbsp;&nbsp;{newname}
      <br />
      <br />
      <button onClick={() => fetchDataHandler()}>fetch data</button>
      {content}
      {/* {!loading && data.length > 0 && <List items={data} removeData={remove} />}
      {!loading && data.length === 0 && !error && <h1>No data found </h1>}
      {!loading && error && <p>{error}</p>}
      {loading && (
        <h1>
          <b> Loading Data Please wait... </b>
        </h1>
      )} */}
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <AddMovies addMoviesData={addMoviesHandler} />
    </div>
  );
}
