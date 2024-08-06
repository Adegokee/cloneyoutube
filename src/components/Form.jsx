import React, { useContext, useState } from 'react';
import { Movie } from '../Movie';


const Form = () => {
    const [film, setFilm] = useState('')
    const {searchKey, setSearchKey} = useContext(Movie);
    const [message, setmessage] = useState('')
    const handleSubmit = (e) => {
    e.preventDefault();
        setSearchKey(film)
        setFilm('')
        // setmessage(film)
        // console.log({message})


    }
    
  return (
  <div>
     <form action="" onSubmit={handleSubmit}>
        <div style={{display:'flex',  width:'100%', height:'50px' }}>
            <div>
                <img src="" alt="" />
            </div>
            
            <div>
                <input type="text" placeholder='Search ...' value={film} onChange={(e) => setFilm(e.target.value)}/>
            </div>
            <button type="submit">Submit</button>
        </div>
        
   </form>
   {message}
  </div>
  
  )
}

export default Form