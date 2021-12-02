package g12.projserver.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

import g12.projserver.models.Recipe;


public interface RecipeRepository extends CrudRepository<Recipe, Integer>{
  @Query(value = "SELECT * FROM db_project.recipes", nativeQuery = true)
  public List<Recipe> findAllRecipes();
}




