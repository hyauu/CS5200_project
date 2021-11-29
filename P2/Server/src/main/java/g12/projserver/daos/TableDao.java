package g12.projserver.daos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import g12.projserver.models.Table;
import g12.projserver.repositories.TableRepository;

@RestController
public class TableDao {
  @Autowired
  TableRepository tableRepository;

  @GetMapping("/tables/find")
  public Iterable<Table> findAllTables() {
    return tableRepository.findAll();
  }

  @GetMapping("/tables/find/id/{tableId}")
  public Table findTableById(@PathVariable("tableId") Integer tableId) {
    return tableRepository.findById(tableId).get();
  }

  public Table createTable(Table table) {
    return tableRepository.save(table);
  }

  public void deleteTable(Integer tableId) {
    tableRepository.deleteById(tableId);
  }

  public Table updateTable(Integer tableId, Table updatedTable) {
    updatedTable.setTableId(tableId);
    return tableRepository.save(updatedTable);
  }
}



