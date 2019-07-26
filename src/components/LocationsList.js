import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {Card,Icon} from 'semantic-ui-react'

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

    

    return(
        <div>
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
