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
		res.status(404).json({message: err.message});
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
		res.status(409).json({message: err.message});
	}
}
