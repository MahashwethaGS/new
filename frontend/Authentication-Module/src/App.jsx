import { useState } from 'react'
import axios from "axios"
import './App.css'
import {useNavigate} from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  function handleEmail(event){
    setEmail(event.target.value)
  }
  function handlePass(event){
    setPass(event.target.value)
  }
  
  async function handleSubmit(event){
    event.preventDefault();
    const payload = {
      email: email,
      pass: pass,
    }
    const res = await axios.post("http://localhost:3000/credentials", {
      payload,
    })
    console.log(res);
    navigate('/details');
    window.location.reload()

  }

  return (
    <>
    <div>
      <form action="/details" method="POST"  onSubmit={handleSubmit}>
        Email
        <input type="email" name='email' onChange={handleEmail} className='email' id='email' value={email}/> <br />
        Password
        <input type="text"  name='pass' onChange={handlePass} className='pass' id='pass' value={pass}/> <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
    </>
  )
}

export default App
