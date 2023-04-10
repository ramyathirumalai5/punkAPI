import React from 'react';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';

const App = () => {
    console.log('Entered App');
  return (
   <>
   <NavBar />
   <SideBar/>
   </>
  )
}

export default App;