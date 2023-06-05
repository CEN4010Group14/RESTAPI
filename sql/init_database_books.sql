CREATE DATABASE books;


CREATE TABLE Publisher(
  id int NOT NULL,
  name         VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE Genre(
  id int NOT NULL,
  name         VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
);


CREATE TABLE Books(
  id        int NOT NULL, 
  isbn       VARCHAR(255) NULL, 
  name     VARCHAR(255) NOT NULL, 
  price    DECIMAL(4, 2) NULL, 
  genre_id int NULL,
  year int NULL,
  copies_sold int NULL,
  description VARCHAR(255) NULL,
  publisher_id   INT NULL, 
  rating   float NULL,   
  PRIMARY KEY(id),
  FOREIGN KEY (publisher_id) REFERENCES Publisher(id),
  FOREIGN KEY (genre_id) REFERENCES Genre(id)
);

CREATE TABLE authors( 
  id   int NOT NULL,
  fname  VARCHAR(100) NOT NULL, 
  lname   VARCHAR(100) NULL,
  publisher_id   INT NULL, 
  PRIMARY KEY(id),
  FOREIGN KEY (publisher_id) REFERENCES Publisher(id)
);

CREATE TABLE book_authors (
  book_id   INT NOT NULL, 
  author_id INT NOT NULL, 
  PRIMARY KEY(book_id, author_id), 
  FOREIGN KEY (book_id) REFERENCES Books(id),
  FOREIGN KEY (author_id) REFERENCES Authors(id)
);

