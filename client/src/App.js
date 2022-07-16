import React, { useEffect ,useState} from 'react'
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import{getPosts} from './actions/actions';


import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './style';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  const [currId,setCurrId]=useState(null);
  const style = useStyles();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPosts());
  }, [currId,dispatch]);

  return (
    <Container maxWidth="lg">
     <Navbar/>
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