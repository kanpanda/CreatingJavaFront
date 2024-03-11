import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  useEffect(() => {
    fetch("http://localhost:8080/user/all", { method: "GET" })
      .then(res => res.json())
      .then(userdate => {
        console.log(userdate)
      })
  }, []);

  const [user, setUser] = useState('')

  const testConsole = () => {
    // console.log("これはテストです")
    // setCount(count + 1);
    setLove(love + 1);
    console.log(love)
  }

  return (
    <>
    <button onClick={testConsole}>ボタンです</button> 
    <button >{love}</button> 
    <button onClick={testConsole}>ボタンです</button> 
    <button >{love}</button> 
    </>
  )
}

export default App
