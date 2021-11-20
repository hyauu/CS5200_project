DROP TABLE IF EXISTS `db_project`.`recipes_to_ingredients`;
CREATE TABLE `db_project`.`recipes_to_ingredients` (
 `id` INT NOT NULL AUTO_INCREMENT,
 `recipe_id` INT NULL,
 `ingredient_id` INT NULL,
 `quantity` VARCHAR(45) NULL,

 
 PRIMARY KEY (`id`),
 
 CONSTRAINT `recipes_to_ingredients_to_recipes`
   FOREIGN KEY (`recipe_id`)
   REFERENCES `db_project`.`recipes` (`id`)
   ON DELETE NO ACTION
   ON UPDATE NO ACTION,
 CONSTRAINT `recipes_to_ingredients_to_ingredients`
   FOREIGN KEY (`ingredient_id`)
   REFERENCES `db_project`.`ingredients` (`id`)
   ON DELETE NO ACTION
   ON UPDATE NO ACTION);