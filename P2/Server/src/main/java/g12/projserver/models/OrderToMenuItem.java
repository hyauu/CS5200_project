package g12.projserver.models;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "orders-to-menu-items")
public class OrderToMenuItem {
  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer orderToMenuItemId;
  private Integer orderId;
  private Integer menuItemId;
  private Integer quantity;

  public Integer getOrderToMenuItemId() {
    return orderToMenuItemId;
  }

  public void setOrderToMenuItemId(Integer orderToMenuItemId) {
    this.orderToMenuItemId = orderToMenuItemId;
  }

  public Integer getOrderId() {
    return orderId;
  }

  public void setOrderId(Integer orderId) {
    this.orderId = orderId;
  }

  public Integer getMenuItemId() {
    return menuItemId;
  }

  public void setMenuItemId(Integer menuItemId) {
    this.menuItemId = menuItemId;
  }

  public Integer getQuantity() {
    return quantity;
  }

  public void setQuantity(Integer quantity) {
    this.quantity = quantity;
  }
}
