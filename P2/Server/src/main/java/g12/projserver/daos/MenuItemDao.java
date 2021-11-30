package g12.projserver.daos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
  @PutMapping("/menuitems/create")
  public MenuItem createMenuItem(@RequestBody MenuItem menuItem) {
    return menuItemRepository.save(menuItem);
  }

  @DeleteMapping("/menutiems/delete/id/{menuItemId}")
  public void deleteMenuItem(@PathVariable("menuItemId") Integer menuItemId) {
    menuItemRepository.deleteById(menuItemId);
  }

  @PostMapping("/menutiems/update/id/{menuItemId}")
  public MenuItem updateMenuItem(@PathVariable("menuItemId") Integer menuItemId, MenuItem updatedMenuItem) {
    updatedMenuItem.setMenuItemId(menuItemId);
    return menuItemRepository.save(updatedMenuItem);
  }


}
