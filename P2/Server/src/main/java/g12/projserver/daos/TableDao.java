package g12.projserver.daos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

  @PutMapping("/table/create")
  public Table createTable(@RequestBody Table table) {
    return tableRepository.save(table);
  }

  @DeleteMapping("/table/delete/id/{tableId}")
  public void deleteTable(@PathVariable("tableId") Integer tableId) {
    tableRepository.deleteById(tableId);
  }

  @PostMapping("/table/update/id/{tableId}")
  public Table updateTable(@PathVariable("tableId") Integer tableId, @RequestBody Table updatedTable) {
    updatedTable.setTableId(tableId);
    return tableRepository.save(updatedTable);
  }
}



