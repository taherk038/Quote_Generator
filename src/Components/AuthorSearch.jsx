import React, { useState } from 'react'

function AuthorSearch({todo}) {
    const  [search,Setsearch]=useState('')
   
    function check(e){
        Setsearch(e.target.value);
    }
  return (

    <div>
        <div className='search'>
          <input type='text' placeholder='search' value={search} onChange={check} />
    </div>
        {
            
              todo.filter((str)=>{
                return str.toLowerCase().includes(search.toLocaleLowerCase());
              }).map((str,index)=>{
               return  <p key= {index} className='auth'> {str}</p>
                
              })  
               
            
        }
       
        
        
    </div>

  )
}

export default AuthorSearch