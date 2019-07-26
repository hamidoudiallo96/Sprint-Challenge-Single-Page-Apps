import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Card} from 'semantic-ui-react'


export default function EpisodeList(){
    const [episodes,setEpisodes] = useState([])
    useEffect(()=>{
        axios.get("https://rickandmortyapi.com/api/episode")
        .then(data =>{
            setEpisodes(data.data.results)
        }).catch(err =>{
            console.log(err)
        })
    },[episodes])

    return(
        <div>
            {episodes.map((element,index) =>(
                <Card ke ={index}>
                    <Card.Content header= {element.name}/>
                    <Card.Content description={'characters:'} />
                    <Card.Content extra>
                        <div>
                            <p>{element.air_date}</p>
                            <p>{element.episode}</p>
                        </div>
                    </Card.Content>
                </Card>
            ))}
        </div>
    )
}
