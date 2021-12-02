DROP TABLE IF EXISTS `db_project`.`customers`;
CREATE TABLE `db_project`.`customers` (
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
 PRIMARY KEY (`id`));
 