import PostMessage from '../models/model.js';

export const getPosts = async(req,res)=>{
    try{
        const postMessages = await PostMessage.find();
        console.log(postMessages);
        res.status(200).json({postMessages: postMessages});
    }catch(err){
       res.status(404).json({message: err.message});     
    }

};

export const createPosts = async(req,res)=>{
    const post = req.body;
    const newPost = new PostMessage(post);
    try{
       await newPost.save();
        res.status(201).json({newPost});
    }catch(err){
       res.status(409).json({message: err.message});     
    }

};