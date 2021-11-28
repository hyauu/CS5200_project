package g12.projserver.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

import g12.projserver.models.MenuItem;

public interface MenuItemRepository extends CrudRepository<MenuItem, Integer> {
  @Query(value = "SELECT * FROM db_project.menu_items", nativeQuery = true)
  public List<MenuItem> findAllMenuItems();
}

