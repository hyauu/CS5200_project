package g12.projserver.daos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import g12.projserver.models.Ingredient;
import g12.projserver.repositories.IngredientRepository;


@RestController
public class IngredientDao {
  @Autowired
  IngredientRepository ingredientRepository;

  @GetMapping("/ingredients/find")
  public Iterable<Ingredient> findAllIngredients() {
    return ingredientRepository.findAllIngredients();
  }

  @GetMapping("/ingredients/find/id/{ingredientId}")
  public Ingredient findIngredientById(@PathVariable("ingredientId") Integer ingredientId) {
    return ingredientRepository.findById(ingredientId).get();
  }

  public Ingredient createIngredient(Ingredient ingredient) {
    return ingredientRepository.save(ingredient);
  }

  public void deleteIngredient(Integer ingredientId) {
    ingredientRepository.deleteById(ingredientId);
  }

  public Ingredient updateIngredient(Integer ingredientId, Ingredient updatedIngredient) {
    updatedIngredient.setIngredientId(ingredientId);
    return ingredientRepository.save(updatedIngredient);
  }



}
