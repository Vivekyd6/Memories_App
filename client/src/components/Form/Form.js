import React, { useState, useEffect } from 'react';
import useStyles from './style';

import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost, updatePost } from '../../actions/actions';
import { useSelector } from 'react-redux';

const Form = ({ currId, setCurrId }) => {

  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tag: '',
    selectedFile: ''
  });
  const post = useSelector((state) => currId ? state.posts.find((p) => p._id === currId) : null)
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);
  const style = useStyles();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (currId) {
      dispatch(updatePost(currId, postData))
    } else {
      dispatch(createPost(postData));
    }
    clear();
  }

  const clear = () => {
           setCurrId(null);
           setPostData({
            creator: '',
            title: '',
            message: '',
            tag: '',
            selectedFile: ''
          });
  }


  return (
    <Paper className={style.paper}>
      <form autoComplete="off" noValidate className={`${style.root} ${style.form}`} onSubmit={handleSubmit}>
        <Typography variant="h5">{currId?'Editing':'Creating'} a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tag}
          onChange={(e) => setPostData({ ...postData, tag: e.target.value })}
        />
        <div className={style.fileInput} >
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
            style={{
              borderRadius: '5px',
            }}

          />
          <Button className={style.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </div>
      </form>
    </Paper>
  )
}

export default Form;