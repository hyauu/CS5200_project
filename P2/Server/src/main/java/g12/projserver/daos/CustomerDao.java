package g12.projserver.daos;

import g12.projserver.models.Customer;
import g12.projserver.repositories.CustomerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class CustomerDao {
  @Autowired
  CustomerRepository customerRepository;

  @GetMapping("/customers/find")
  public Iterable<Customer> findAllCustomers() {
    return customerRepository.findAllCustomer();
  }

  @GetMapping("/customers/find/id/{customerId}")
  public Customer findCustomerById(@PathVariable("customerId") Integer customerId) {
    return customerRepository.findById(customerId).get();
  }

  @PutMapping("/customers/create")
  public Customer createCustomer(@RequestBody Customer customer) {
    return customerRepository.save(customer);
  }

  @DeleteMapping("/customers/delete/id/{customerId}")
  public void deleteCustomer(@PathVariable("customerId") Integer customerId) {
    customerRepository.deleteById(customerId);
  }

  @PostMapping("/customers/update/id/{customerId}")
  public Customer updateCustomer(@PathVariable("customerId")Integer customerId, @RequestBody Customer updatedCustomer) {
    updatedCustomer.setCustomerId(customerId);
    return customerRepository.save(updatedCustomer);
  }


}
