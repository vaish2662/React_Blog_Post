import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import Button from 'react-bootstrap/Button';

function Posts() {
  const[posts,setPost]=useState([])

  useEffect(()=>{
    fetchPosts()
  },[])
  const fetchPosts=async()=>{
    const response=await axios.get(`http://localhost:5000/posts`)
    setPost(response.data)
  }

  const deletePost=async(id)=>{
    await axios.delete(`http://localhost:5000/posts/${id}`)
    fetchPosts()
  }
  return (
    <div>
      <h2 style={{paddingTop:"8px"}}>All Post</h2>

        {
          posts.map((post)=>(          
            <Card style={{marginTop:"5px"}} key={post.id}>
            <Card.Header>{post.id}. {post.Post_Title} 
            <span style={{position: 'absolute',right: '10px', marginTop:'0px'}}>
              <Button onClick={()=>deletePost(post.id)} variant="outline-light" size='sm' style={{textDecoration:"none"}}>
              <AiFillDelete style={{fontSize:"25px",color:"red"}}  /></Button> 
              </span>
              <span style={{position: 'absolute',right: '60px'}}>
                <Link to={`/edit_post/${post.id}`}>
                <AiFillEdit style={{fontSize:'25px'}} />
                </Link>
              </span>
              
              </Card.Header>
            <Card.Body>
              <blockquote>
                <p>
                  {post.Post_Body}
                </p>

              </blockquote>
            </Card.Body>
          </Card>
          ))
        }
    </div>
    
  )
}

export default Posts
