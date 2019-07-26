import React from 'react'
import { makeStyles } from '@material-ui/styles';
import {Image} from 'semantic-ui-react'

const homeStyles = makeStyles({
  container:{
    backgroundColor: '#97ce4c',
    padding:'20px'
  },
  header:{
    color:'#e89ac7',
  },
  image:{
    border: '10px solid #e89ac7 '
  }
})
export default function WelcomePage() {
  const classes = homeStyles()
  return <section className={classes.container}>
    <header>
      <h1 className = {classes.header}>Welcome to the ultimate fan site!</h1>
      <Image className={classes.image} src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="rick" size = 'medium' rounded centered />
    </header>
  </section>

}
