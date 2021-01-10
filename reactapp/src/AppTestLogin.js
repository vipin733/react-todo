import React, { useState } from 'react'

const Login = () =>  {
  const [username, setUserName] = useState('')
  const [usernameError, setUserNameError] = useState('')

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const [loginStatus, setLoginStatus] = useState(false)
  
  const _login = () => {
    validateForm(username, password, setUserNameError, setPasswordError, setLoginStatus)
  }

  return (
    <>
      <div  className="header">
        <h2>{loginStatus ? 'Logged In success' : 'Login Form'}</h2>
        {
            !loginStatus ? <><input type="text" id="email" onChange={e => setUserName(e.target.value)} value={username} placeholder="username..."/> <br/>
            {usernameError ? <><p>{usernameError}</p></> : ''}
           <input type="password" id="password"  onChange={e => setPassword(e.target.value)} value={password} placeholder="password..."/><br/>
           {passwordError ? <><p>{passwordError}</p></> : ''}
           <span onClick={() => _login()} className="addBtn">Login</span></> : ''
        }
        
      </div>
    </>
  )
}

const Index = () =>  {
  return (
    <>
      <Login/>
    </>
  )
}

export default Index
