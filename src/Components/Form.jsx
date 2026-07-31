import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log('Form submitted')
        setName('')
        setEmail('')
    }

    const nameField = (e) =>{
        console.log(e.target.value)
        setName(e.target.value)
    }
    
    const emailField = (e) =>{
        setEmail(e.target.value)
        console.log(e.target.value)
    }
  return (
    <>
        <form onSubmit={submitHandler} className='flex flex-col p-20'>
            <input type="text" placeholder='Enter your name' value={name} onChange={nameField} className='text-xl border rounded w-fit px-3 py-4'/>
            <input type="email" placeholder='Enter your email' value={email} onChange={emailField} className='text-xl border rounded w-fit px-3 py-4 mt-2'/>
            <button className='text-xl border rounded w-fit px-3 py-4 bg-cyan-700'>submit</button>
        </form>
    </>
  )
}

export default Form