import React from 'react';
import {useSelector} from "react-redux";
import Post from "./Post/Post";
import {Grid, CircularProgress} from "@material-ui/core";
import useStyles from "./styles";

const Posts = ({setCurrentId}) => {
// in reducers index js am declarat key value posts
	const posts = useSelector((state)=> state.posts);
	const classes = useStyles();
	console.log(posts)
	// posts is not iterable !!!
	return (
		!posts.length ? <CircularProgress /> :(
			<Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
				{posts.map((post)=>(
					<Grid item key={post._id} xs={12} sm={6}>
						<Post props={post} setCurrentId={setCurrentId} />
					</Grid>
				))}
			</Grid>
		)
	);
};

export default Posts;

