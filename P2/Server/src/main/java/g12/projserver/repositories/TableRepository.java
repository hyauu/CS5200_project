package g12.projserver.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

import g12.projserver.models.Table;

public interface TableRepository extends CrudRepository<Table, Integer>{
  @Query(value = "SELECT * FROM db_project.tables", nativeQuery = true)
  public List<Table> findAllTables();
}

