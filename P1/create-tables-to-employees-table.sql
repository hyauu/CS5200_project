DROP TABLE IF EXISTS `db_project`.`tables_to_employees`;
CREATE TABLE `db_project`.`tables_to_employees` (
 `id` INT NOT NULL AUTO_INCREMENT,
 `employee_id` INT NOT NULL,
 `table_id` INT NOT NULL,
 
 PRIMARY KEY (`id`),
 
 CONSTRAINT `tables_to_employees_to_employees`
   FOREIGN KEY (`employee_id`)
   REFERENCES `db_project`.`employees` (`id`)
   ON DELETE NO ACTION
   ON UPDATE NO ACTION,
 CONSTRAINT `tables_to_employees_to_tables`
   FOREIGN KEY (`table_id`)
   REFERENCES `db_project`.`tables` (`id`)
   ON DELETE NO ACTION
   ON UPDATE NO ACTION);