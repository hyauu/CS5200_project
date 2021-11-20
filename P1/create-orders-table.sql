DROP TABLE IF EXISTS `db_project`.`orders`;
CREATE TABLE `db_project`.`orders` (
 `id` INT NOT NULL AUTO_INCREMENT,
 `customer_id` INT NOT NULL,
 `table_id` INT NOT NULL,
 `created` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
 PRIMARY KEY (`id`),
 
 CONSTRAINT `orders_to_customers`
   FOREIGN KEY (`customer_id`)
   REFERENCES `db_project`.`customers` (`id`)
   ON DELETE NO ACTION
   ON UPDATE NO ACTION,
 CONSTRAINT `orders_to_tables`
   FOREIGN KEY (`table_id`)
   REFERENCES `db_project`.`tables` (`id`)
   ON DELETE NO ACTION
   ON UPDATE NO ACTION);
