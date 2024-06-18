"use client";

import React from 'react';
import CountUp from 'react-countup';

const Animatecounter = ({amount}:{amount:number}) => {
  return (
    <div className='w-full'>
      <CountUp 
      decimal=","
      prefix="₹"end={amount} />
    </div>
  );
}

export default Animatecounter;