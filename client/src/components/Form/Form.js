import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost} from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
	const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
	const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
	const dispatch = useDispatch();
	const classes = useStyles();
	useEffect(()=>{
		if (post) setPostData(post)
	}, [post])

	const clear = () => {
		setCurrentId(0); //null
		setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// dc este gol
		if (postData.selectedFile === ''){
			return;
		}
		// ==================
		dispatch(createPost(postData));
		 if (currentId){
		 	dispatch(updatePost(currentId,  postData)) // in afara de data am nevoie si de id
		 } else {
			 dispatch(createPost(postData));
		 }
		 clear();
	};

	return (
		<Paper className={classes.paper}>
			<form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
				<Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography>

				{/*din useState({})*/}
				{/*am nevoie de ... altfel suprascriu toate valorile, dupa care ce vreau sa scriu, title, etc*/}
				<TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} required />
				<TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
				<TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
				{/*// fac split intr un array cu virgula ca si separator*/}
				<TextField name="tags" variant="outlined" label="Tags (c oma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
				<div className={classes.fileInput}>
					<FileBase
						type="file"
						multiple={false}
						// imp {base64} !!!
						onDone={({ base64 } ) => setPostData({ ...postData, selectedFile: base64 })} />

				</div>
				<Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
				<Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
			</form>
		</Paper>
	);
};

export default Form;