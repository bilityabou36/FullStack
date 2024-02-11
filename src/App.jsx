import { useState } from 'react';
import Employee from './components/Employee';
import './App.css';
import {v4 as uuidv4} from 'uuid';

function App() {
  const[role, setRole] = useState('subject')
  const isEmployee = true;
  const [employees, setEmployees] = useState([{
 name: "Abou",
 role: "Mansa",
 img: "https://cdn.pixabay.com/photo/2012/02/27/15/35/lion-17335_1280.jpg"
  }, {
    name: "Makessa",
    role: "Queen",
    img: "https://cdn.pixabay.com/photo/2019/12/10/13/31/woman-4685862_1280.jpg"
  }, {
    name: "Hassan",
    role: "Prince",
    img: "https://cdn.pixabay.com/photo/2019/04/03/13/45/prince-hal-4100357_1280.jpg"
  }, {
    name: "Abraham",
    role: "Farma",
    img: "https://cdn.pixabay.com/photo/2018/03/31/21/18/african-american-3279360_1280.jpg"
  }])

  return (
    <div className="app">
    {isEmployee ? (
      <div >
         <input type="text"
    onChange={ (e)=> {
      console.log(e.target.value)
    setRole(e.target.value);
    }}
    
    />
  <div className='flex flex-wrap'>
    {employees.map((employee)=>{
      console.log(employee)
    return(
    <Employee key={uuidv4()} name={employee.name} 
    role={employee.role} img={employee.img}/>
    )

    })}
  </div>
    

</div>
    ):(
      <p>There is no employee </p>
    )}
    
    </div>
  )
}

export default App
