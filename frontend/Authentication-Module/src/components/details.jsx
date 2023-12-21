import React from 'react'
import { useState } from 'react'
import axios from "axios"
import {useNavigate} from 'react-router-dom';

function details() {
  const navigate = useNavigate();
  const [age, setAge] = useState(0)
  const [gender, setGender] = useState('')
  const [dob, setDob] = useState('')
  const [mobile, setMobile] = useState(0)

  function handleAge(event){
    setAge(event.target.value)
  }
  function handleGender(event){
    setGender(event.target.value)
  }
  function handleDob(event){
    setDob(event.target.value)
  }
  function handleMobile(event){
    setMobile(event.target.value)
  }
  
  async function handleSubmit(event){
    event.preventDefault();
    const payload = {
      gender: gender,
      age: age,
      dob: dob,
      mobile: mobile,
    }
    const res = await axios.post("http://localhost:3000/details", {
      payload,
    })
    console.log(res);
    navigate('/dashboard');
    window.location.reload()

  }



  return (
    <>
    <div>
      <form action="/" method="POST"  onSubmit={handleSubmit}>
        Gender
        <input type="text" name='gender' onChange={handleGender} className='gender' id='gender' value={gender}/> <br />
        Age
        <input type="number"  name='age' onChange={handleAge} className='age' id='age' value={age}/> <br />
        Mobile
        <input type="number"  name='mobile' onChange={handleMobile} className='mobile' id='mobile' value={mobile}/> <br />
        DOB
        <input type="text"  name='dob' onChange={handleDob} className='dob' id='dob' value={dob}/> <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
    </>
  )
}

//age gender dob mobile

export default details