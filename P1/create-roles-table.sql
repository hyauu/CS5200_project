DROP TABLE IF EXISTS `db_project`.`roles`;
CREATE TABLE `db_project`.`roles` (
 `role` VARCHAR(45) NOT NULL UNIQUE,
 PRIMARY KEY (`role`));
 
INSERT INTO `db_project`.`roles` (`role`) VALUES ('ADMIN');
INSERT INTO `db_project`.`roles` (`role`) VALUES ('WAITER');
INSERT INTO `db_project`.`roles` (`role`) VALUES ('CHEF');