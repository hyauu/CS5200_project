package g12.projserver.daos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import g12.projserver.models.OrderToMenuItem;
import g12.projserver.repositories.OrderToMenuItemRepository;

@RestController
public class OrderToMenuItemDao {
  @Autowired
  OrderToMenuItemRepository orderToMenuItemRepository;

  @GetMapping("/ordertomenuitems/find")
  public Iterable<OrderToMenuItem> findAllOrders() {
    return orderToMenuItemRepository.findAllOrderToMenuItems();
  }

  @GetMapping("/ordertomenuitems/find/id/{id}")
  public OrderToMenuItem findOrderToMenuItemById(@PathVariable("id") Integer id) {
    return orderToMenuItemRepository.findById(id).get();
  }

  public OrderToMenuItem createOrderToMenuItem(OrderToMenuItem orderToMenuItem) {
    return orderToMenuItemRepository.save(orderToMenuItem);
  }

  public void deleteOrderToMenuItem(Integer id) {
    orderToMenuItemRepository.deleteById(id);
  }

  public OrderToMenuItem updateOrderToMenuItem(Integer id, OrderToMenuItem updatedOrderToMenuItem) {
    updatedOrderToMenuItem.setOrderToMenuItemId(id);
    return orderToMenuItemRepository.save(updatedOrderToMenuItem);
  }


}
