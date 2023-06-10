use books;
DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ISBN` bigint NOT NULL,
  `Name` varchar(256) NOT NULL,
  `Price` float NOT NULL,
  `Rating` float NOT NULL,
  `GenreId` int NOT NULL,
  `PublisherId` int NOT NULL,
  `Year` smallint NOT NULL,
  `Copies` int NOT NULL,
  `Description` varchar(2048) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQ_ISBN` (`ISBN`),
  KEY `GenreId` (`GenreId`),
  KEY `PublisherId` (`PublisherId`),
  CONSTRAINT `books_ibfk_1` FOREIGN KEY (`GenreId`) REFERENCES `genres` (`id`) ON DELETE CASCADE,
  CONSTRAINT `books_ibfk_2` FOREIGN KEY (`PublisherId`) REFERENCES `publishers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=324 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
