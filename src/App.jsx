import { useState } from 'react'
import { puppyList } from './components/data'

import './App.css'

function App() {
  // never try to update the variables in the the 
  const [puppies, setPuppies] = useState(puppyList); 
  // if you dont have a variable or array, you can use an empty array []
  // the hook returns an array
  // if you get a declared but never used angry noodle(error squiggle) that is ok as long as you declare it later in the function/component 
  console.log("component is rendering");
  console.log(puppies);
  return (  
    <div>
      {puppies.map((puppy)=>{
        return <p key={puppy.id}>{puppy.name}</p>
      })}
    </div>
  );
}

// Could also work like this with strictly using arrow functions
// This removes the second return function 

// return (
//     <div>
//       {puppies.map((puppy) => (
//         <p>{puppy.name}</p>
//       ))}
//     </div>

export default App
