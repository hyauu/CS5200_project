package g12.projserver.repositories;

import g12.projserver.models.Customer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CustomerRepository extends CrudRepository<Customer, Integer> {
    @Query(value = "SELECT * FROM customers", nativeQuery = true)
    List<Customer> findAllCustomer();
}