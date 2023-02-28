import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postsSlice";

import React from 'react'
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const dispatch = useDispatch();

    const users = useSelector(selectAllUsers);

    const onTitleChange = (e)=>setTitle(e.target.value);
    const onContentChange = (e)=>setContent(e.target.value);
    const onAuthorChanged = e => setUserId(e.target.value);

    const onSavePost = ()=>{
        if(title && content){
            dispatch(postAdded(title,content,userId));
        }

        setTitle('');
        setContent('');
    }

    const userOptions = users.map((user)=>{
       return <option value={user.id} key={user.id}>{user.name}</option>
    })

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
  return (
    <section>
        <h2>Add a new Post</h2>
        <div className="form">
            <label htmlFor="postTitle">Post Title:</label>
            <input id="postTitle" name="postTitle" value={title} onChange={onTitleChange} />
            <label htmlFor="postAuthor">Author:</label>
            <select id="postAuthor" onChange={onAuthorChanged} value={userId}>
                <option value=""></option>
                {userOptions}
            </select>
            <label htmlFor="postContent">Post Content:</label>
            <input id="postContent" name="postContent" value={content} onChange={onContentChange} />
            <button type="submit" onClick={onSavePost} disabled={!canSave}>Save Post</button>
        </div>
    </section>
  )
}

export default AddPostForm