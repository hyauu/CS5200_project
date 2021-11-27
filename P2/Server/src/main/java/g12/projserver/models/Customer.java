package g12.projserver.models;

import javax.persistence.*;
import javax.persistence.Table;

@Entity
@Table(name = "customers")
public class Customer extends User {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer customerId;

    public Integer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

}
