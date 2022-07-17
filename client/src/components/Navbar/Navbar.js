import React from 'react';
import {Toolbar,Button,Avatar, AppBar, Typography } from '@material-ui/core';
import memories from '../../images/memories.png';
import useStyles from './style';
import { Link } from 'react-router-dom';




const Navbar = () => {
  const style = useStyles();
  const user = null;
  return (
    <AppBar className={style.appBar} position="static" color="inherit">
      <div className={style.brandContainer}>
        <Typography component={Link} to="/" className={style.heading} variant="h2" align="center">Memories</Typography>
        <img className={style.image} src={memories} alt="icon" height="60" />
      </div>
      <Toolbar className={style.toolbar}>
        {user ? (
          <div className={style.profile}>
            <Avatar className={style.purple} alt={user.result.name} src={user.result.imageUrl}>
              {user.result.name.charAt(0)}
              <Typography className={style.userName} variant="h6">{user.result.name}</Typography>
              <Button className={style.logout} color="secondary" variant="contained">LOGOUT</Button>
            </Avatar>
          </div>
        ) : (
          <Button component={Link} to ="/auth"  color="primary" variant="contained">Sign IN</Button>
      )}
      </Toolbar>
    </AppBar>

  )
}

export default Navbar;