-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_project
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `dateOfBirth` datetime DEFAULT NULL,
  `created` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `phone` int DEFAULT NULL,
  `salary` float DEFAULT '0',
  `table_id` int DEFAULT NULL,
  `role` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `employees_to_roles` (`role`),
  KEY `employees_to_tables` (`table_id`),
  CONSTRAINT `employees_to_roles` FOREIGN KEY (`role`) REFERENCES `roles` (`role`),
  CONSTRAINT `employees_to_tables` FOREIGN KEY (`table_id`) REFERENCES `tables` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (1,'Hank','Aaron','sweet_kristy','dgsy7','ddd@mail.com','1996-11-11 00:00:00','2021-11-20 17:55:02','2021-11-20 17:55:02',24588839,2000,1,'WAITER'),(2,'Frank','Lee','kristy_honey','fgdg8','ddg@mail.com','1980-08-02 00:00:00','2021-11-20 17:55:02','2021-11-20 17:55:02',NULL,6000,2,'CHEF'),(3,'John','Adams','bubbly_snowflake','gddg88',NULL,'1986-09-22 00:00:00','2021-11-20 17:55:02','2021-11-20 17:55:02',NULL,4000,1,'CHEF'),(4,'Tony','Benn','lovely_dog','tbb7@','dhdh@gmail.com','1999-02-19 00:00:00','2021-11-20 17:55:02','2021-11-20 17:55:02',NULL,5000,2,'WAITER'),(5,'Christy','Liu','princess\n\n','d09',NULL,'2000-09-07 00:00:00','2021-11-20 17:55:02','2021-11-20 17:55:02',NULL,4000,3,'WAITER'),(6,'Eric','Duff','sugar',NULL,NULL,'1965-07-09 00:00:00','2021-11-20 17:55:02','2021-11-20 17:55:02',NULL,5000,4,'WAITER'),(7,'Jane','Lee','ross','sgd7','ross@rmail.com','1975-09-01 00:00:00','2021-11-20 17:55:02','2021-11-20 17:55:02',NULL,10000,NULL,'ADMIN');
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-20 20:38:09
