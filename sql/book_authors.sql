use books;
DROP TABLE IF EXISTS book_authors;
create table book_authors (
 BookId INT NOT NULL,
	FOREIGN KEY(BookId)
    REFERENCES books(id)
    ON DELETE CASCADE,
 AuthorId INT NOT NULL,
	FOREIGN KEY(AuthorId)
    REFERENCES authors(id)
    ON DELETE CASCADE
);