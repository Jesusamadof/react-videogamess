import React from 'react';
import Carousel from '../Carousel';
import Navbar from '../Navbar';
import { useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div>
      <Navbar/>
     <Carousel/>
      </div>
  )
}

export default Home