import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import Home from '../src/components/Home'
import Projects from './components/Projects'
import Apartment from './components/Apartment';
import Form from './components/contactform/Form';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Home/>
   <Projects/>
   <Apartment/>
   <Form/>
    </>
  )
}

export default App
