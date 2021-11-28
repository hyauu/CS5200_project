package g12.projserver.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

import g12.projserver.models.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Integer> {
  @Query(value = "SELECT * FROM employees", nativeQuery = true)
  public List<Employee> findAllEmployees();
}
