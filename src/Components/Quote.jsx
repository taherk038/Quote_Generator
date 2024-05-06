import React, {useState } from 'react'
import axios from'axios'
import AuthorSearch from './AuthorSearch';

function Quote() {

    
     const [quote,setQuote]=useState("")
     const [todo,Settodo]=useState([])
     const  [count,Setcount]=useState(-1);
     function change(){
       Setcount(count+1);
     }

     
    
      function newQuote(){
        axios.get(`https://api.quotable.io/random`).then(function(res){
        setQuote(res.data);
        Settodo((prevTodo) => [...prevTodo, res.data.content+" ("+res.data.authorSlug+")"]);
    })
      } 

      console.log(setQuote)
      console.log(todo)

        
  return (
    <>
    
    { quote ? (
            
            <div  className='container' key={quote.id}>
           <h1>{quote.content}</h1>
           <div className='Author'>
             <h5>{quote.authorSlug}</h5>
           </div>
           </div>
           
   ) :(
    <div  className='container1' >
    <p ><h1>  "Quote here"  </h1></p>
    </div>
  )
   }
    <div className='btn'>
                <button style={{backgroundColor:'navy',color:'white',fontSize:'large'}} onClick={()=>{newQuote();change() }}>
                    Generate Quote</button>
            </div>
   <AuthorSearch todo={todo} count={count} />     
    </>
  )
}

export default Quote