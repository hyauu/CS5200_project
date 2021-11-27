package g12.projserver.models;

import javax.persistence.*;
import javax.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer employeeId;
    private String role;
    private Double salary;
    private Integer tableId;
}
