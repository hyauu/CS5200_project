DROP TABLE IF EXISTS `db_project`.`menu_items`;
CREATE TABLE `db_project`.`menu_items` (
 `id` INT NOT NULL AUTO_INCREMENT,
 `name` VARCHAR(45) NOT NULL,
 `serve_time` VARCHAR(45) NOT NULL,
 `price` FLOAT NOT NULL,
 `recipe_id` INT NULL,
 
 PRIMARY KEY (`id`),
 
 CONSTRAINT `menu_items_to_serve_time`
   FOREIGN KEY (`serve_time`)
   REFERENCES `db_project`.`serve_time` (`serve_time`)
   ON DELETE NO ACTION
   ON UPDATE NO ACTION,
 CONSTRAINT `menu_items_to_recipe_id`
   FOREIGN KEY (`recipe_id`)
   REFERENCES `db_project`.`recipes` (`id`)
   ON DELETE NO ACTION
   ON UPDATE NO ACTION);