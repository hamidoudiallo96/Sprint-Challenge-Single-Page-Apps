import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {Card,Icon} from 'semantic-ui-react'
import {makeStyles} from '@material-ui/styles'

const cardStyle = makeStyles({
   card:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-between',
    backgroundColor: '#e4a788',
    padding: '20px',
    border: '10px groove #97ce4c'
   }
})

export default function LocationsList() {
    const [location,setLocation] = useState([])

    useEffect(() =>{
        axios.get("https://rickandmortyapi.com/api/location")
        .then(data =>{
            setLocation(data.data.results)
            
        })
        .catch(err =>{
            console.log(err)
        })
    },[location])

    
    const classes = cardStyle()
    return(
        <div className = {classes.card}>
            {location.map((item,index) =>(
                <Card key ={index}>
                    <Card.Content header={item.name} />
                    <Card.Content description={
                        <div>
                            <p>{item.type}</p>
                            <p>{item.dimension}</p>
                        </div>
                    } />
                    <Card.Content extra>
                    <Icon name='user' />
                    Residents
                    </Card.Content>
                </Card>
            ))}
        </div>
    )
}
