package g12.projserver.daos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import g12.projserver.models.Recipe;
import g12.projserver.repositories.RecipeRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class RecipeDao {
  @Autowired
  RecipeRepository recipeRepository;

  @GetMapping("/recipes/find")
  public Iterable<Recipe> findAllRecipes() {
    return recipeRepository.findAll();
  }

  @GetMapping("/recipes/find/id/{recipeId}")
  public Recipe findRecipeById(@PathVariable("recipeId") Integer recipeId) {
    return recipeRepository.findById(recipeId).get();
  }

  @PostMapping("/recipes/create")
  public Recipe createRecipe(@RequestBody Recipe recipe) {
    return recipeRepository.save(recipe);
  }

  @DeleteMapping("/recipes/delete/id/{recipeId}")
  public void deleteRecipe(@PathVariable("recipeId") Integer recipeId) {
    recipeRepository.deleteById(recipeId);
  }

  @PutMapping("/recipes/update/id/{recipeId}")
  public Recipe updateRecipe(@PathVariable("recipeId") Integer recipeId, @RequestBody Recipe updatedRecipe) {
    updatedRecipe.setRecipeId(recipeId);
    return recipeRepository.save(updatedRecipe);
  }
}
