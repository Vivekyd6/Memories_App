import React from 'react';
import { AppBar, Typography} from '@material-ui/core';
import memories from '../../images/memories.png';


import style from '../../style';
const Navbar = () => {
  return (
    <div>
         <AppBar className={style.appBar} position="static" color="inherit">
        <Typography className={style.heading} variant="h2" align="center">Memories</Typography>
        <img className={style.image} src={memories} alt="icon" height="60" />
      </AppBar>
    </div>
  )
}

export default Navbar;