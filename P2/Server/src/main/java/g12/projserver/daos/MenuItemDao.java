package g12.projserver.daos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import g12.projserver.models.MenuItem;
import g12.projserver.repositories.MenuItemRepository;

@RestController
public class MenuItemDao {
  @Autowired
  MenuItemRepository menuItemRepository;

  @GetMapping("/menuitems/find")
  public Iterable<MenuItem> findAllMenuItems() {
    return menuItemRepository.findAllMenuItems();
  }

  @GetMapping("/menuitems/find/id/{menuItemId}")
  public MenuItem findMenuItemById(@PathVariable("menuItemId") Integer menuItemId) {
    return menuItemRepository.findById(menuItemId).get();
  }

  public MenuItem createMenuItem(MenuItem menuItem) {
    return menuItemRepository.save(menuItem);
  }

  public void deleteMenuItem(Integer menuItemId) {
    menuItemRepository.deleteById(menuItemId);
  }

  public MenuItem updateMenuItem(Integer menuItemId, MenuItem updatedMenuItem) {
    updatedMenuItem.setMenuItemId(menuItemId);
    return menuItemRepository.save(updatedMenuItem);
  }


}
