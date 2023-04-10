import React from 'react'

const SideBar = () => {
  return (
    <div className='w-1/5 h-screen border-2 border-black border-solid'>
        <form >
            <label for="abv">High ABV &gt; 6.0%</label>
            <input type= "checkbox" name="abv" /><br/>
            <label for="range">Classic Range </label>
            <input type= "checkbox" name="range" /><br/>
            <label for="abv">Acidic (PH &gt;4)</label>
            <input type= "checkbox" name="abv" />
            
        </form>

    </div>
  )
}

export default SideBar;