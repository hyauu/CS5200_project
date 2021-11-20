DROP TABLE IF EXISTS `db_project`.`serve_time`;
CREATE TABLE `db_project`.`serve_time` (
 `serve_time` VARCHAR(45) NOT NULL UNIQUE,
 PRIMARY KEY (`serve_time`));
 
INSERT INTO `db_project`.`serve_time` (`serve_time`) VALUES ('BREAKFAST');
INSERT INTO `db_project`.`serve_time` (`serve_time`) VALUES ('LUNCH');
INSERT INTO `db_project`.`serve_time` (`serve_time`) VALUES ('DINNER');