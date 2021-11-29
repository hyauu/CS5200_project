package g12.projserver.models;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import g12.projserver.models.Employee;
import java.util.*;

@Entity
@javax.persistence.Table(name = "tables")
public class Table {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer tableId;
    private Integer capacity;
    @OneToMany(targetEntity = Employee.class, mappedBy = "table", orphanRemoval = true)
    private List<Employee> employees;

    @JsonManagedReference
    public List<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(List<Employee> employees) {
        this.employees = employees;
    }

    public Integer getTableId() {
        return tableId;
    }

    public void setTableId(Integer tableId) {
        this.tableId = tableId;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }
}
