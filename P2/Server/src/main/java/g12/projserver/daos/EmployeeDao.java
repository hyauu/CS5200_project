package g12.projserver.daos;

import g12.projserver.repositories.TableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import g12.projserver.models.Employee;
import g12.projserver.repositories.EmployeeRepository;
import g12.projserver.models.Table;

@RestController
public class EmployeeDao {
  @Autowired
  EmployeeRepository employeeRepository;
  @Autowired
  TableRepository tableRepository;

  @GetMapping("/employees/find")
  public Iterable<Employee> findAllEmployees() {
    return employeeRepository.findAllEmployees();
  }

  @GetMapping("/employees/find/id/{employeeId}")
  public Employee findEmployeeById(@PathVariable("employeeId") Integer employeeId) {
    return employeeRepository.findById(employeeId).get();
  }
  @PostMapping("/employees/create")
  public Employee createEmployee(@RequestBody Employee employee) {
    return employeeRepository.save(employee);
  }

  @DeleteMapping("/employees/delete/id/{employeeId}")
  public void deleteEmployee(@PathVariable("employeeId") Integer employeeId) {
    employeeRepository.deleteById(employeeId);
  }

  @PutMapping("/employees/update/id/{employeeId}")
  public Employee updateEmployee(@PathVariable("employeeId") Integer employeeId, @RequestBody Employee updatedEmployee) {
    updatedEmployee.setEmployeeId(employeeId);
    return employeeRepository.save(updatedEmployee);
  }

}
