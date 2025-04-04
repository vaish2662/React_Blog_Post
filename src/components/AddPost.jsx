import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function AddPost() {
  const [Post_Title,setTitle]=useState("")
  const [Post_Body,setBody]=useState("")
  const navigate=useNavigate()
  const handlSubmit=async(e)=>{
    e.preventDefault()
    await axios.post(`http://localhost:5000/posts`,{Post_Title,Post_Body})
    navigate('/')
  }
  return (
    <div>
      <h2>Create posts</h2>

      <Form onSubmit={handlSubmit}>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title" value={Post_Title} onChange={(e)=>setTitle(e.target.value)}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Body </Form.Label>
        <Form.Control as="textarea" rows={3} value={Post_Body}
        placeholder='Post Body'
        onChange={(e)=>setBody(e.target.value)}  />
      </Form.Group>
        <Button type='submit'>Add Post</Button>
      </Form>
    </div>
  )
}

export default AddPost
