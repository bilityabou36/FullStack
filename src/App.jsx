import { useState } from 'react'
import Employee from './components/Employee'


function App() {
  const[role, setRole] = useState('nurse')
  const isEmployee = true;

  return (
    <div>
    {isEmployee ? (
      <div>
         <input type="text"
    onChange={ (e)=> {
      console.log(e.target.value)
    setRole(e.target.value);
    }}
    
    />
    <Employee
    name = "Abou"
    role = "Mansa"
    />
    <Employee
    name = "Makessa"
    role = "Princess"/>
    <Employee
    name = "John"
    role={role}
    />
   
    

</div>
    ):(
      <p>There is no employee </p>
    )}
    
    </div>
  )
}

export default App
