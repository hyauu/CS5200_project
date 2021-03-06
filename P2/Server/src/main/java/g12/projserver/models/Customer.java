package g12.projserver.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import javax.persistence.Table;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "customers")
public class Customer {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer customerId;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String email;
    private Date created; // https://stackoverflow.com/questions/2400955/how-to-store-java-date-to-mysql-datetime-with-jpa
    private Date updated;
    private Integer phone;
    private Date dateOfBirth;

    @OneToMany(targetEntity = Order.class, mappedBy = "customerId", orphanRemoval = true)
    private List<Order> orders;

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }



    public Integer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getCreatedAt() {
        return created;
    }

    public void setCreated(Date createdAt) {
        this.created = createdAt;
    }

    public Date getUpdated() {
        return updated;
    }

    public void setUpdated(Date updatedAt) {
        this.updated = updatedAt;
    }

    public Integer getPhone() {
        return phone;
    }

    public void setPhone(Integer phone) {
        this.phone = phone;
    }

    public Customer(String first_name, String last_name, String username, String password,String email) {
        this.firstName = first_name;
        this.lastName = last_name;
        this.username = username;
        this.password = password;
        this.email=email;


    }

    public Customer() {}

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }
}
