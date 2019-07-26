import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Card} from 'semantic-ui-react'
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

    const classes = cardStyle()
    return(
        <div className = {classes.card} >
            {episodes.map((element,index) =>(
                <Card  key ={index}>
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
