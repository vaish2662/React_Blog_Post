import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';


function EditPost() {
  const {id}=useParams();
  const [Post_Title,setTitle]=useState("")
  const [Post_Body,setBody]=useState("")
  const navigate=useNavigate()
  useEffect(()=>{
    fetchPost()    
  },[])

  const fetchPost=async()=>{
      const response=await axios.get(`http://localhost:5000/posts/${id}`)
      setTitle(response.data.Post_Title)
      setBody(response.data.Post_Body)
  }
  const handlSubmit=async(e)=>{
    e.preventDefault()
    await axios.put(`http://localhost:5000/posts/${id}`,{Post_Title,Post_Body})
    navigate('/')
  }
  
  return (
    <div>
      <h2>Edit post </h2>
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
        <Button type='submit'>Update Post</Button>
      </Form>
    </div>
  )
}

export default EditPost
