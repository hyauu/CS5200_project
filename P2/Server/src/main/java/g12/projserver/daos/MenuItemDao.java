package g12.projserver.daos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import g12.projserver.models.MenuItem;
import g12.projserver.repositories.MenuItemRepository;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
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
  @PostMapping("/menuitems/create")
  public MenuItem createMenuItem(@RequestBody MenuItem menuItem) {
    return menuItemRepository.save(menuItem);
  }

  @DeleteMapping("/menuitems/delete/id/{menuItemId}")
  public void deleteMenuItem(@PathVariable("menuItemId") Integer menuItemId) {
    menuItemRepository.deleteById(menuItemId);
  }

  @PutMapping("/menuitems/update/id/{menuItemId}")
  public MenuItem updateMenuItem(@PathVariable("menuItemId") Integer menuItemId, MenuItem updatedMenuItem) {
    updatedMenuItem.setMenuItemId(menuItemId);
    return menuItemRepository.save(updatedMenuItem);
  }


}
