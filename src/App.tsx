import React,{useEffect} from 'react'
import Main from './Components/Main'
import './App.css'
import {configureStore} from './firebasesw'




const App:React.FC = () => {
 useEffect(() => {
  configureStore()
 }, [])
 
  return (
    <>
<Main/>
    </>
     
  )
}

export default App