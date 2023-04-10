import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div>
    <div className="bg-blue-500 p-7 flex flex-row justify-between">
    <div>
    <h2 className='font-mono text-4xl'>Longhorns Beverage Group</h2>
    </div>
    <div>
        <a className='mr-5 text-xl'>Home</a>
        <a className='text-xl'>About</a>
    </div>
  </div>
  </div>
  )
}

export default NavBar