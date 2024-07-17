import React, { useEffect } from 'react'
import Nav from '../components/Nav/Nav';
import Home from '../components/Home/Home';

const HomePage = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <>
    
        <Nav/>
        <Home />
    </>
  )
}

export default HomePage