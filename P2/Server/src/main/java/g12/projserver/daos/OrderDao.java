package g12.projserver.daos;

import g12.projserver.repositories.MenuItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import g12.projserver.models.Order;
import g12.projserver.repositories.OrderRepository;

@RestController
public class OrderDao {
  @Autowired
  OrderRepository orderRepository;

  @GetMapping("/orders/find")
  public Iterable<Order> findAllOrders() {
    return orderRepository.findAllOrders();
  }

  @GetMapping("/orders/find/id/{orderId}")
  public Order findOrderById(@PathVariable("orderId") Integer orderId) {
    return orderRepository.findById(orderId).get();
  }

  @PostMapping("/orders/create")
  public Order createOrder(@RequestBody Order order) {
    return orderRepository.save(order);
  }

  @DeleteMapping("/orders/delete/id/{orderId}")
  public void deleteOrder(@PathVariable("orderId") Integer orderId) {
    orderRepository.deleteById(orderId);
  }

  @PutMapping("/orders/update/id/{orderId}")
  public Order updateOrder(@PathVariable("orderId") Integer orderId, @RequestBody Order updatedOrder) {
    updatedOrder.setOrderId(orderId);
    return orderRepository.save(updatedOrder);
  }
}
