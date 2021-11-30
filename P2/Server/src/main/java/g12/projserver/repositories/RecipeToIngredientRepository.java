package g12.projserver.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

import g12.projserver.models.RecipeToIngredient;

public interface RecipeToIngredientRepository extends CrudRepository<RecipeToIngredient, Integer>{
  @Query(value = "SELECT * FROM db_project.recipes_to_ingredients", nativeQuery = true)
  public List<RecipeToIngredient> findAllRecipeToIngredients();
}
