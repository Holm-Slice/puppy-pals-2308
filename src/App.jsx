import { useState } from 'react'
import { puppyList } from './components/data'

import './App.css'

function App() {
  // never try to update the variables in the the 
  const [puppies, setPuppies] = useState(puppyList); 
  // if you dont have a variable or array, you can use an empty array []
  // the hook returns an array
  // if you get a declared but never used angry noodle(error squiggle) that is ok as long as you declare it later in the function/component 

  const [featPupId, setFeatPupId] = useState(null); // null is a specific value of nothing

  const featuredPup = puppies.find((puppy) => puppy.id === featPupId);
  // log(featurePup)

  console.log("component is rendering");
  console.log(featPupId);
  return (  
    <div>
            {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}


      {featPupId}
      {puppies.map((puppy)=>{
        return <p onClick={()=>setFeatPupId(puppy.id)} key={puppy.id}>{puppy.name}</p>
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
