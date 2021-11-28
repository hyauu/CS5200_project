package g12.projserver.daos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


import g12.projserver.models.Employee;
import g12.projserver.repositories.EmployeeRepository;

@RestController
public class EmployeeDao {
  @Autowired
  EmployeeRepository employeeRepository;

  @GetMapping("/employees/find")
  public Iterable<Employee> findAllEmployees() {
    return employeeRepository.findAllEmployees();
  }

  @GetMapping("/employees/find/id/{employeeId}")
  public Employee findEmployeeById(@PathVariable("employeeId") Integer employeeId) {
    return employeeRepository.findById(employeeId).get();
  }

  public Employee createEmployee(Employee employee) {
    return employeeRepository.save(employee);
  }

  public void deleteEmployee(Integer employeeId) {
    employeeRepository.deleteById(employeeId);
  }

  public Employee updateEmployee(Integer employeeId, Employee updatedEmployee) {
    updatedEmployee.setEmployeeId(employeeId);
    return employeeRepository.save(updatedEmployee);
  }

}
