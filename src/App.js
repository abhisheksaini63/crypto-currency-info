import React, { useEffect, useState } from 'react';
import './App.css';
import Statewise from './All';

function App() {
  // const [data, setData] = useState([]);

  // const getData = async () => {
  //   const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false');

  //   const accData = await res.json();
  //   console.log(accData);
  //   setData(accData);
  //   console.log(data);

  // }

  // useEffect(() => {
  //   getData();

  // }, []);
  return (
    <>
     <Statewise/>
    </>

  );
}

export default App;
