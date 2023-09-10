import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const UpdateEmployee = () => {

    const {id}=useParams();


    const navigator=useNavigate();

    const [employee,setEmployee]=useState({
        id:id,
        firstName:"",
        lastName:"",
        emailId:"",
    });

    useEffect(()=>{
        const fetchdata= async ()=>{
            try {
                const response = await EmployeeService.getEmployeeById(id);
                setEmployee(response.data);
            } catch (error) {
                console.log(error);
            }
        }
         fetchdata();
    }
   
    ,[]);

    const handleChange=(e)=>{
        const value = e.target.value;
        setEmployee({...employee,[e.target.name]: value});
    };

    const updateEmployee=(e)=>{
        e.preventDefault();
        EmployeeService.updateEmployee(employee,id).then((response)=>{
                 navigator("/employeeList");
        }).catch((error)=>{
            console.log(error);
        })

       

    }

    const cnclhandler=()=>{
        navigator("/employeeList")

    }

  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
       <div className='px-8 py-8'>
        <div className='font-thin text-2xl tracking-wider'>
            <h1>Update Employee Details</h1>
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
        <div className='items-center justify-center h-14 w-full my-4'>
            <label className='block text-grey-600 text-sm font-normal'>ID</label>
            <input type='email' onChange={(e)=>handleChange(e)} name='id' value={employee.id} className='h-10 w-96 border mt-2 px-2 py-2'></input>
        </div>
        <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
           <button  className='rounded text-white font-semibold bg-green-900 hover:bg-green-700 py-2 px-6 ' onClick={updateEmployee} >Update</button>
        
           <button className='rounded text-white font-semibold bg-red-700 hover:bg-red-600 py-2 px-6 ' onClick={cnclhandler} >Cancel</button>
        </div>

       </div>
    </div>
  )
}

export default UpdateEmployee