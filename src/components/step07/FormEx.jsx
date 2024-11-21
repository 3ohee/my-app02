import React, { useState } from 'react';

function FormEx() {
  const [username, setUserName] = useState("")
  const [isSubScribed, setSubcribed] = useState(false)
  const roles = ['user', 'admin', 'guset']
  const [role, setRole] = useState(roles[0])

  return (
    <form>
      <p>Name : {username} {isSubScribed && '(Subcribed)'} </p>
      <p>Role : {role} </p>
      <p>

        <input
          type='text'
          placeholder='UserName'
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </p>

      <p>
        <input
          type='checkbox'
          checked={isSubScribed}
          onChange={(e) => setSubcribed(e.target.checked)}
        />
        <label>SubScribed</label>
      </p>
      <p>
        <select
            value={role}
            onChange={(e) => setRole(e.target.value)}>
            {roles.map((k)=>(<option key={k}  value={k}>{k}</option>  ))} 
        </select>

      </p>

    </form>
  );
}

export default FormEx;