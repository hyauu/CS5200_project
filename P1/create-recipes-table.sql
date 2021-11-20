DROP TABLE IF EXISTS `db_project`.`recipes`;
CREATE TABLE `db_project`.`recipes` (
 `id` INT NOT NULL AUTO_INCREMENT,
 `instructions` VARCHAR(45) NULL,

 PRIMARY KEY (`id`));