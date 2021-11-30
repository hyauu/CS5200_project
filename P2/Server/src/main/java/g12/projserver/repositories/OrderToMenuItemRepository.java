package g12.projserver.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


import g12.projserver.models.OrderToMenuItem;

public interface OrderToMenuItemRepository extends CrudRepository<OrderToMenuItem, Integer>{
  @Query(value = "SELECT * FROM db_project.orders_to_menu_items", nativeQuery = true)
  public List<OrderToMenuItem> findAllOrderToMenuItems();
}

