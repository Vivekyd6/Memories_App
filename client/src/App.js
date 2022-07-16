import React, { useEffect ,useState} from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import{getPosts} from './actions/actions';


import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './style';
import memories from './images/memories.png';

const App = () => {
  const [currId,setCurrId]=useState(null);
  const style = useStyles();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPosts());
  }, [currId,dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={style.appBar} position="static" color="inherit">
        <Typography className={style.heading} variant="h2" align="center">Memories</Typography>
        <img className={style.image} src={memories} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container className={style.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts  setCurrId={setCurrId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currId={currId} setCurrId={setCurrId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App