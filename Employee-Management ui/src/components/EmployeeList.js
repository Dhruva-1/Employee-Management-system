import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import Employee from './Employee';

const EmployeeList = () => {

    const navigate=useNavigate();

    const [loading, setLoading] = useState(true);
    const [employee, setEmployee] = useState(null);

    useEffect(()=>{

        const fetchdata= async ()=>{
            setLoading(true);
            try {
                const response = await  EmployeeService.getEmployees();
                setEmployee(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchdata();

    },[]);

    const deleteEmployee=(e,id)=>{
        e.preventDefault();
        EmployeeService.deleteEmployee(id)
        .then((res)=>{
            if(employee){
                setEmployee((prevElement)=>{
                    return prevElement.filter((employee)=>employee.id!==id);
                })
            }
        })

    }

  return (
    <div className='container mx-auto my-8'>
      <div className='h-12'>
        <button className='rounded bg-slate-600 text-white px-6 py-2 font-semibold' onClick={()=>navigate("/addEmployee")}>Add Employee</button>
      </div>
      <div className='flex shadow border-b'>
        <table className='min-w-full py-2'>
            <thead className='bg-gray-100'>
                <tr>
                    <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>ID</th>
                    <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>First Name</th>
                    <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Last Name</th>
                    <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Email Id</th>
                    <th className='text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Actions</th>
                </tr>
            </thead>
        { !loading && (
            <tbody className='bg-white'>
                {employee.map((employee)=>(
                    <Employee employee={employee} deleteEmployee={deleteEmployee} key={employee.id}/>
                ))}
            </tbody>
        )}
        </table>

      </div>
    </div>
  )
}

export default EmployeeList;