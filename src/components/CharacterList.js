import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {Card} from 'semantic-ui-react'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const  [characters, setCharacters] = useState([])
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    axios.get("https://rickandmortyapi.com/api/character")
    .then(data =>{
      
      setCharacters(data.data.results)
     
      
    }).catch(err =>{
      console.log(err)
    })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [characters])

  return (
    <section className='character-list grid-view'>
      {characters.map((element,index) =>(
        <Card key = {index}
          image={element.image}
          header={element.name}
          meta={element.status}
          description={'Movies:'}
          extra={element.gender}
        />
      ))}
      
      
      
    </section>
  )

}
