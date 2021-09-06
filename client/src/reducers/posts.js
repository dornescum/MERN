// este o functie care accepta stste si action

// const reducer = (state =[], action) =>{
export default (posts =[], action) =>{
	switch (action.type){
		//vine din actions/post.js
		case 'FETCH_ALL':
			return action.payload;
		case 'CREATE':
			return [...posts, action.payload] ;
		default:
			return posts;
	}
}