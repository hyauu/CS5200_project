package g12.projserver.models;

import javax.persistence.*;

@Entity
@javax.persistence.Table(name = "tables")
public class Table {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer tableId;
    private Integer capacity;
}
