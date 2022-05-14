import React, { useState } from 'react'

const Inputs = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    

    return (
        <div className='flex flex-col justify-center items-center m-20'>
            <label className='text-lg' for="username">Enter Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} className='border border-black rounded m-2' type="text" name='username' id='username' ></input>
            <label className='text-lg' for="password">Enter Password</label>
            <input value={password} onChange={((e) => setPassword(e.target.value))} className='border border-black rounded m-2' type={showPassword ? 'text' : 'password' } id="password" name='password'></input>
            <h2 >{username}</h2>
            
            <h2 >{showPassword ? password :'*'.repeat(password.length)}</h2>

            <button onClick={(e) => setShowPassword(!showPassword)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Show / Hide Password</button>

        </div>
    )
}

export default Inputs