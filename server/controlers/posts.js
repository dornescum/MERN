// toata logica pentru rute este aici
import PostMessage from "../models/postMessage.js";

export const getPosts =async (req, res)=>{
			// este async(dureaza pana gasesti in baza de date info)
	try{
		 const postMessage = await PostMessage.find();
		 // si un raspuns
		 res.status(200).json(postMessage);
	}
	catch(err){
		res.status(404).json({message: err.message})
	}
}
export const createPost =(req, res)=>{
	res.send('post creation' )
}
