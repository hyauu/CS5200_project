package g12.projserver.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@javax.persistence.Table(name = "recipes")
public class Recipe {
  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer recipeId;
  private String instructions;

  public Integer getRecipeId() {
    return recipeId;
  }

  public void setRecipeId(Integer recipeId) {
    this.recipeId = recipeId;
  }

  public String getInstructions() {
    return instructions;
  }

  public void setInstructions(String instructions) {
    this.instructions = instructions;
  }
}
