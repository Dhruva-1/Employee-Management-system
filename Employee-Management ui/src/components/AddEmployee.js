import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {

  const [employee, setemployee] = useState({
    id : "",
    firstName :"",
    lastName :"",
    emailId :"",
  });

  const navigate=useNavigate();

  const handleChange=(e)=>{
    const value = e.target.value;
    setemployee({...employee,[e.target.name]: value});
  };

  const saveEmployee=(e)=>{
     e.preventDefault();
     
    EmployeeService.saveEmployee(employee)
    .then((response)=>{
            console.log(response);
            navigate("/employeeList"); 
    })
    .catch((error)=>{
      console.log(error);
    })

  }

  const reset=(e)=>{
    e.preventDefault();
     setemployee({
      id : "",
    firstName :"",
    lastName :"",
    emailId :"",
     })
  }

  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
       <div className='px-8 py-8'>
        <div className='font-thin text-2xl tracking-wider'>
            <h1>Add Employee</h1>
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
            <label className='block text-grey-600 text-sm font-normal'>First Name</label>
            <input type='text' onChange={(e)=>handleChange(e)} name='firstName' value={employee.firstName} className='h-10 w-96 border mt-2 px-2 py-2'></input>
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
            <label className='block text-grey-600 text-sm font-normal'>Last Name</label>
            <input type='text' onChange={(e)=>handleChange(e)} name='lastName' value={employee.lastName} className='h-10 w-96 border mt-2 px-2 py-2'></input>
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
            <label className='block text-grey-600 text-sm font-normal'>Email</label>
            <input type='email' onChange={(e)=>handleChange(e)} name='emailId' value={employee.emailId} className='h-10 w-96 border mt-2 px-2 py-2'></input>
        </div>
        <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
           <button onClick={saveEmployee} className='rounded text-white font-semibold bg-green-900 hover:bg-green-700 py-2 px-6 ' >Save</button>
        
           <button className='rounded text-white font-semibold bg-red-700 hover:bg-red-600 py-2 px-6 ' onClick={reset}>Clear</button>
        </div>

       </div>
    </div>
  )
}

export default AddEmployee;