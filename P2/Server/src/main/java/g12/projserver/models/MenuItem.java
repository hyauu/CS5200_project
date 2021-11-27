package g12.projserver.models;

import javax.persistence.*;
import javax.persistence.Table;

@Entity
@Table(name = "menu_items")
public class MenuItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer menuItemId;
    private String name;
    private Double price;
    private Integer recipeId;
    private String serveTime;
}
