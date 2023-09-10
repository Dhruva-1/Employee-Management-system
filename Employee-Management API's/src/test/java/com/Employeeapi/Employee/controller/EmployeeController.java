package com.Employeeapi.Employee.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Employeeapi.Employee.model.Employee;
import com.Employeeapi.Employee.services.EmployeeService;

@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
    
	@Autowired
	private EmployeeService employeeService;

	public EmployeeService getEmployeeService() {
		return employeeService;
	}

	public void setEmployeeService(EmployeeService employeeService) {
		this.employeeService = employeeService;
	}
	
	@PostMapping("/employees")
	public Employee createEmloyee(@RequestBody Employee employee) {
		return employeeService.createEmployee(employee);
	}
}
