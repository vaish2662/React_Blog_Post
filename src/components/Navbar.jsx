import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{position: 'absolute',right: '90px', paddingTop:'15px'}}>
      <Link to='/' style={{background: "transparent",  fontSize: "18px",
    color: "#49557e",textDecoration:"none",
    border: "1px solid tomato",padding: "10px 30px",
    borderRadius: "50px", cursor: "pointer",
    }}>Posts</Link>
      <Link to='/add_post' style={{background: "transparent",  fontSize: "18px",
    color: "#49557e",textDecoration:"none",
    border: "1px solid tomato",padding: "10px 30px",
    borderRadius: "50px", cursor: "pointer",
    }}>Add Post</Link>
      </div>
  )
}


export default Navbar
