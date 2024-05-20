import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { backendUrl } from '../Url/backendUrl'

function Login() {
    const navigate = useNavigate();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
  const Submit = async () => {
    if(!email || !password ) {
      alert("bosh joylani toldirin pajalsta !")
  }
      try {
          const response = await axios.post(`${backendUrl}/auth`, {
          email: email,
          password: password
        })
        if(response.data) {
          navigate('/admin')
          localStorage.setItem('token', response.data)
        }
      }catch(err) {
        console.log('Xatolik yuz berdi', err);
      }
  }
 
  return (
    <div className='jack '>
    <div className='w-screen h-screen  flex items-center justify-center'>
      <div className='backdrop-blur p-5 w-[340px] rounded-2xl shadow-2xl'>
        <h1 className='text-center text-2xl font-serif'>Login</h1>
        <div className='flex justify-between items-center mt-6'>
            <label htmlFor="username "className=' font-serif'>Email address</label>
            <input placeholder='user@gmail.com' className=' pl-2 cursor-pointer border-2 border-gray-600 border-solid rounded-lg backdrop-blur' id='username' type="text" value={email} onChange={(el) => {setEmail(el.target.value)}} />
        </div>
        <div className='flex justify-between items-center mt-5'>
            <label htmlFor="password" className='font-serif'>Password</label>
            <input placeholder='test123' className='pl-2 cursor-pointer ml-10 border-2 border-gray-500 border-solid rounded-lg' id='password' type="password" value={password} onChange={(el) => {setPassword(el.target.value)}} /><br />
        </div>
        <button onClick={Submit} type='button' className='px-8 py-2 bg-pink-700 hover:bg-blue-900 rounded-md text-white mt-8 ml-24'>Login</button>
      </div>
      </div>
      </div>
  )
}

export default Login
