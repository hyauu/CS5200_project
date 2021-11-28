package g12.projserver.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

import g12.projserver.models.Order;


public interface OrderRepository extends CrudRepository<Order, Integer>{
  @Query(value = "SELECT * FROM db_project.orders", nativeQuery = true)
  public List<Order> findAllOrders();
}

