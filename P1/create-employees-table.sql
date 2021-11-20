DROP TABLE IF EXISTS `db_project`.`employees`;

CREATE TABLE `db_project`.`employees` (
 `id` INT NOT NULL AUTO_INCREMENT,
 `first_name` VARCHAR(45) NULL,
 `last_name` VARCHAR(45) NULL,
 `username` VARCHAR(45) NOT NULL,
 `password` VARCHAR(45) NOT NULL,
 `email` VARCHAR(45) NULL,
 `dateOfBirth` DATETIME NULL,
 `created` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
 `updated` DATETIME NULL DEFAULT CURRENT_TIMESTAMP
      ON UPDATE CURRENT_TIMESTAMP,
 `phone` INT NULL,
 `salary` FLOAT DEFAULT 0,
 `table_id` INT NULL,
 `role` VARCHAR(45) NULL,
 

 PRIMARY KEY (`id`),
 
 CONSTRAINT `employees_to_roles`
   FOREIGN KEY (`role`)
   REFERENCES `db_project`.`roles` (`role`)
   ON DELETE NO ACTION
   ON UPDATE NO ACTION,
   
CONSTRAINT `employees_to_tables`
   FOREIGN KEY (`table_id`)
   REFERENCES `db_project`.`tables` (`id`)
   ON DELETE NO ACTION
   ON UPDATE NO ACTION
);