import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

export function Login(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventdeDefault()
    setUser({username, password})
  }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" value={(e) => setUsername(e.target.value)} placeholder="username" />
      {" "}
      <input type="password" value={(e) => setPassword(e.target.value)} placeholder="password" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
