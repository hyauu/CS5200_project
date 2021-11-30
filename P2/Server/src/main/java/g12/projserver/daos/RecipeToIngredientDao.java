package g12.projserver.daos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import g12.projserver.models.RecipeToIngredient;
import g12.projserver.repositories.RecipeToIngredientRepository;

@RestController
public class RecipeToIngredientDao {
  @Autowired
  RecipeToIngredientRepository recipeToIngredientRepository;

  @GetMapping("/recipetoingredients/find")
  public Iterable<RecipeToIngredient> findAllOrders() {
    return recipeToIngredientRepository.findAllRecipeToIngredients();
  }

  @GetMapping("/recipetoingredients/find/id/{id}")
  public RecipeToIngredient findRecipeToIngredientById(@PathVariable("id") Integer id) {
    return recipeToIngredientRepository.findById(id).get();
  }

  public RecipeToIngredient createRecipeToIngredient(RecipeToIngredient recipeToIngredient) {
    return recipeToIngredientRepository.save(recipeToIngredient);
  }

  public void deleteRecipeToIngredient(Integer id) {
    recipeToIngredientRepository.deleteById(id);
  }

  public RecipeToIngredient updateRecipeToIngredient(Integer id, RecipeToIngredient updatedRecipeToIngredient) {
    updatedRecipeToIngredient.setRecipeToIngredientId(id);
    return recipeToIngredientRepository.save(updatedRecipeToIngredient);
  }
}

