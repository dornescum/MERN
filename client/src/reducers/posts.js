// este o functie care accepta stste si action

// const reducer = (state =[], action) =>{
export default (posts =[], action) =>{
	switch (action.type){
		case 'FETCH_ALL':
			return action.payload; //vine din actions/post.js
		case 'CREATE':
			return posts;
		default:
			return posts;
	}
}