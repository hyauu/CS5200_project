package g12.projserver.models;

import java.util.Date;

public class User {
    protected String firstName;
    protected String lastName;
    protected String username;
    protected String password;
    protected String email;
    protected Date createdAt; // https://stackoverflow.com/questions/2400955/how-to-store-java-date-to-mysql-datetime-with-jpa
    protected Date updatedAt;
    protected Integer phone;
}
