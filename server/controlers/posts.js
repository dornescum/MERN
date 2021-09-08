import mongoose from "mongoose";

// toata logica pentru rute este aici
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
	// este async(dureaza pana gasesti in baza de date info)
	try {
		const postMessages = await PostMessage.find(); //toate messajele
		// si un raspuns
		res.status(200).json(postMessages);
	} catch (err) {
		res.status(404).json({message: err});
	}
}
export const createPost = async (req, res) => {
	const post = req.body;
	// folosesc template din models/PostMessage
	const newPost = new PostMessage(post);
	try {
		await newPost.save(); //pt db
		res.status(201).json(newPost);
	} catch (err) {
		res.status(409).json(err);
	}
}

export const updatePost = async (req, res) => {
	const {id: _id} = req.params; //db _id
	const post = req.body;
	if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no post with that id');

	const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true});
	res.json(updatedPost);
}

export const deletePost = async (req, res) => {
	const {id} = req.params;
	console.log('delete')
	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post with that id');
	await PostMessage.findByIdAndRemove(id);

	res.json({message: 'post deleted'});
}

export const likePost = async (req, res)=>{
	const {id} = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post with that id');
	const post = await PostMessage.findById(id);
	// likeCount: post.likeCount + 1 !
	// 3 lucruri: id, likeCount+1 , {new: true}
	const updatedPost = await PostMessage.findByIdAndUpdate(id,{likeCount: post.likeCount + 1}, {new: true});
	res.json(updatedPost);
}

