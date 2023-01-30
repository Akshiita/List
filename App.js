import React, { useState } from 'react'
import useList from './CustomHooks.js/Todo'

export default function App() {
  const{list,push,pull} = useList()
  const[todo,setTodo] = useState("")
  const onSubmitHandler =(event)=>{
    event.preventDefault()
    push(todo)
    setTodo("")
  }
  return (
    
    <div>
    <header>
	<div className ="mx-auto" style={{width: "200px"}}>
	<p className="fst-italic">Add/Remove your item</p>
  </div>
  <br/>
    <form onSubmit ={onSubmitHandler}>
	<div className ="mx-auto" style={{width: "200px"}}>
     <h3 style ={{backgroundColor:"plum"}}>Enter your item </h3>
	<div class="input-group mb-2">
  <div class="form-floating">
  <input type ="text" className="form-control"value ={todo} onChange ={(e)=>{setTodo(e.target.value)}} required/>
  </div>
</div>
<br/>
	<button type="submit" className="btn btn-dark btn-lg" style={{margin:"18px"}}>Add the item</button>
	</div>
    </form>
    <br/><br/>
    {list.map((listItem,index)=>{
      return(
		<div className ="d-flex p-2" style ={{backgroundColor:"#f0dfee"}}>
        <div key ={index}>
        <li>{listItem}</li>
         <button onClick ={()=>{pull(index)}} className ="btn btn-light btn-lg">Remove it </button>
        </div>
		</div>
      )
    })}
    </header>
    
    </div>
  )
}


