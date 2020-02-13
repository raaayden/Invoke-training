import React, { useState } from 'react';
import './App.css';



function App(){

  const [input, setInput] = useState('')

  const onChangeInput =(value) =>{
    setInput(value)
  }
  
  const [submit,setSubmit] = useState(false)

  const [userInput, setUserInput] = useState([])

  const wordCount = (str) => {

    var a = []
    for(var i=0; i<str.length; i++){
      console.log(str)
      var exist = false
      if(a.length === 0){
        exist = true
      }
      for(var j=0; j<a.length; j++){
        if(str.charAt(i) === a[j].alphabet){
          a[j].occ++
          exist = false
          break
        } else { exist = true }
      } 
      if(exist === true){
        var c = {
          alphabet: str.charAt(i),
          occ: 1
        }
        a.push(c)
        exist = false
      }
      setUserInput(a)
    }
  }

  const newArray = userInput.map((item) =>{
        console.log(item)
        return (      
        <div>  
          <p>Character: {item.alphabet}, Occurence: {item.occ}</p>
        </div>
        )
      })
    

  return(
    <div>
      <label>Enter a string max 100 chars: </label>
      <input
          type='text'
          maxLength ={100}
          value={input}
          onSubmit={(e)=>wordCount(e.target.value)}
          onChange={(e)=>onChangeInput(e.target.value)}
          required
      />
      <button onClick={()=>wordCount(input)}>>
          Submit
      </button>
      <div>
        {newArray}        
      </div>
    </div>
);
}

export default App;