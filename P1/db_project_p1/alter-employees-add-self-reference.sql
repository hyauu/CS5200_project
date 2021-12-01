-- ALTER TABLE `db_project`.`employees`
-- ADD INDEX `employees_2_remployees_idx` (`employees_id` ASC);

ALTER TABLE `db_project`.`employees`
ADD CONSTRAINT `employees_2_employees`
 FOREIGN KEY (`supervisor_id`)
 REFERENCES `db_project`.`employees` (`id`)
 ON DELETE CASCADE
 ON UPDATE CASCADE;