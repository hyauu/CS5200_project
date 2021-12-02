package g12.projserver.daos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

  @PostMapping("/ordertomenuitems/create")
  public OrderToMenuItem createOrderToMenuItem(@RequestBody OrderToMenuItem orderToMenuItem) {
    return orderToMenuItemRepository.save(orderToMenuItem);
  }

  @DeleteMapping("/ordertomenuitems/delete/id/{id}")
  public void deleteOrderToMenuItem(@PathVariable("id") Integer id) {
    orderToMenuItemRepository.deleteById(id);
  }

  @PutMapping("/ordertomenuitems/update/id/{id}")
  public OrderToMenuItem updateOrderToMenuItem(@PathVariable("id") Integer id, @RequestBody OrderToMenuItem updatedOrderToMenuItem) {
    updatedOrderToMenuItem.setOrderToMenuItemId(id);
    return orderToMenuItemRepository.save(updatedOrderToMenuItem);
  }


}
