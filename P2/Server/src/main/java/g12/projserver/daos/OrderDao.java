package g12.projserver.daos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

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

  public Order createOrder(Order order) {
    return orderRepository.save(order);
  }

  public void deleteOrder(Integer orderId) {
    orderRepository.deleteById(orderId);
  }

  public Order updateOrder(Integer orderId, Order updatedOrder) {
    updatedOrder.setOrderId(orderId);
    return orderRepository.save(updatedOrder);
  }
}
