package com.Employeeapi.Employee.services;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Employeeapi.Employee.entity.EmployeeEntity;
import com.Employeeapi.Employee.model.Employee;
import com.Employeeapi.Employee.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	private EmployeeRepository employeeRepository;
	
	public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
		this.employeeRepository=employeeRepository;
	}
	
	@Override
	public Employee createEmployee(Employee employee) {
		EmployeeEntity employeeEntity=new EmployeeEntity();
		BeanUtils.copyProperties(employee, employeeEntity);
		employeeRepository.save(employeeEntity);
		return employee;
	}


	
	
}
