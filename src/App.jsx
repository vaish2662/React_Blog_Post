import './App.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import { Routes,Route } from 'react-router-dom'
import Posts from './components/Posts'
import AddPost from './components/AddPost'
import EditPost from './components/EditPost'
import Navbar from './components/Navbar'
import { Container } from 'react-bootstrap'

function App() {

  return (
    <>
    <Container>
      <Navbar/>
       <Routes>
          <Route path='/' element={<Posts/>}/>
          <Route path='/add_post' element={<AddPost/>}/>
          <Route path='/edit_post/:id' element={<EditPost/>}/>
        </Routes>
    </Container>
    </>
  )
}

export default App
