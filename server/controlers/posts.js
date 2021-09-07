import mongoose from "mongoose";

// toata logica pentru rute este aici
import PostMessage from "../models/postMessage.js";

export const getPosts =async (req, res)=>{
			// este async(dureaza pana gasesti in baza de date info)
	try{
		 const postMessages = await PostMessage.find(); //toate messajele
		 // si un raspuns
		 res.status(200).json(postMessages);
	}
	catch(err){
		res.status(404).json({message: err});
	}
}
export const createPost =async (req, res)=>{
	const post= req.body;
	// folosesc template din PostMessage
	const newPost = new PostMessage(post);
	try{
		await newPost.save(); //pt db
		res.status(201).json(newPost);
	}
	catch(err){
		res.status(409).json({message: err});
	}
}
export const updatePost = async (req,res)=>{
	const {id: _id} = req.params; //db _id
	const post = req.body;
	if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no post with that id');

	const updatedPost = await PostMessage.findById(_id, {...post, _id}, {new: true});
	res.json(updatedPost);
}
export const deletePost = async(req, res)=>{
	const {id} = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post with that id');
	await PostMessage.findByIdAndRemove(id);
	console.log('delete')
	res.json({message: 'post deleteted'});
}

