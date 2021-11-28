package g12.projserver.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

import g12.projserver.models.Ingredient;


public interface IngredientRepository extends CrudRepository<Ingredient, Integer> {
  @Query(value = "SELECT * FROM db_project.ingredients", nativeQuery = true)
  public List<Ingredient> findAllIngredients();
}
