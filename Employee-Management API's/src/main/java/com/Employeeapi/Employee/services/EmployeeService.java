package com.Employeeapi.Employee.services;

import java.util.List;


import com.Employeeapi.Employee.model.Employee;

public interface EmployeeService {

	Employee createEmployee(Employee employee);

	List<Employee> getAllEmployees();

	boolean deleteEmployee(Long id);

	Employee getEmployeeById(long id);

	Employee updateEmployee(long id, Employee employee);

}
