DROP TABLE IF EXISTS `db_project`.`orders_to_menu_items`;
CREATE TABLE `db_project`.`orders_to_menu_items` (
 `id` INT NOT NULL AUTO_INCREMENT,
 `name` VARCHAR(45) NULL,
 `order_id` INT NULL,
 `menu_item_id` INT NULL,
 `quantity` INT NULL,
 
 PRIMARY KEY (`id`),
 
 CONSTRAINT `orders_to_menu_items_to_orders`
   FOREIGN KEY (`order_id`)
   REFERENCES `db_project`.`orders` (`id`)
   ON DELETE NO ACTION
   ON UPDATE NO ACTION,
 CONSTRAINT `orders_to_menu_items_to_menu_items`
   FOREIGN KEY (`menu_item_id`)
   REFERENCES `db_project`.`menu_items` (`id`)
   ON DELETE NO ACTION
   ON UPDATE NO ACTION);