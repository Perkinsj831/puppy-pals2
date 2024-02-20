import { useState } from 'react'
import { puppyList } from "./data"
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList) // usually want as an empty array or 0
  const [featPupId, setFeatPupId] = useState(null)
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup)
  return (
      <div className='App'>
        {
          puppies.map((puppy) => {
            return <p onClick={() =>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
          })
        }
        { featPupId && <div className='featPup'>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div> }
        
      </div>
  )
}

export default App
