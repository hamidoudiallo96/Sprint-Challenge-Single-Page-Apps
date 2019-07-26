import React from 'react';
import { makeStyles } from '@material-ui/styles';


const headerStyles = makeStyles({
  header:{
    color:'#44281d',
    fontWeight: 'bold',
    fontStyle: 'oblique',
    fontSize: '4rem'
  }
})
export default function Header() {
  const classes = headerStyles()
  return <header className="ui centered">
    <h1 className={classes.header}>Rick &amp; Morty Fan Page</h1>
  </header>
}