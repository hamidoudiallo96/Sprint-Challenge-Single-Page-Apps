import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {Card} from 'semantic-ui-react'
import {makeStyles} from '@material-ui/styles'
import {Route,Link} from 'react-router-dom'

const cardStyles = makeStyles({
  
  border: '50px groove black'
})
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

  const classes = cardStyles()
  return (
    <section className={`${cardStyles} grid-view`}>
      {characters.map((element,index) =>(
        <Card  key = {index}
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
