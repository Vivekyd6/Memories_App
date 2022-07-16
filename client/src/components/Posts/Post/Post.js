import React from 'react'
import useStyles from './style';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import {useDispatch} from 'react-redux';

import { likePost, deletePost } from '../../../actions/actions';

const Post = ({post,setCurrId}) => {
  const style = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={style.card}>
      <CardMedia className={style.media} image={post.selectedFile} title={post.title} />
      <div className={style.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={style.overlay2}>
        <Button onClick={()=>setCurrId(post._id)} style={{ color: 'white' }} size="small" ><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <div className={style.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={style.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions className={style.cardActions}>
        <Button size="small" color="primary" ><ThumbUpAltIcon fontSize="small" onClick={() => dispatch(likePost(post._id))}/> Like  {post.likeCount} </Button>
        <Button size="small" color="primary" ><DeleteIcon fontSize="small"  onClick={() => dispatch(deletePost(post._id))}/> Delete</Button>
      </CardActions>
    </Card>
  )
}

export default Post;




