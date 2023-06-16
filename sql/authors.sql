use books;
DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authors` (
  `id` int NOT NULL,
  `FirstName` varchar(128) NOT NULL,
  `LastName` varchar(128) NOT NULL,
  `Biography` varchar(15991) NOT NULL,
  `PublisherId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `PublisherId` (`PublisherId`),
  CONSTRAINT `authors_ibfk_1` FOREIGN KEY (`PublisherId`) REFERENCES `publishers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;