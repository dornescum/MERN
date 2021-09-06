import * as api from '../api';

// api.fetchPosts()

// action creators
export const getPosts =()=> async(dispatch)=>{
	try{
		const data = await api.fetchPosts();
		// dispatch 2 chestii: type & payload !!
		dispatch({type:"FETCH_ALL", payload: data});

	}
	catch(err){
		console.log(err.message)
	}

	// const action = {type: "FETCH_ALL", payload:[]}
	// dispatch(action);
}