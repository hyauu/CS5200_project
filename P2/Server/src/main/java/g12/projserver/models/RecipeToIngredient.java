package g12.projserver.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "recipes-to-ingredients")
public class RecipeToIngredient {
  public Integer getRecipeToIngredientId() {
    return recipeToIngredientId;
  }

  public void setRecipeToIngredientId(Integer recipeToIngredientId) {
    this.recipeToIngredientId = recipeToIngredientId;
  }

  public Integer getRecipeId() {
    return recipeId;
  }

  public void setRecipeId(Integer recipeId) {
    this.recipeId = recipeId;
  }

  public Integer getIngredientId() {
    return ingredientId;
  }

  public void setIngredientId(Integer ingredientId) {
    this.ingredientId = ingredientId;
  }

  public String getQuantity() {
    return quantity;
  }

  public void setQuantity(String quantity) {
    this.quantity = quantity;
  }

  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer recipeToIngredientId;
  private Integer recipeId;
  private Integer ingredientId;
  private String quantity;
}
