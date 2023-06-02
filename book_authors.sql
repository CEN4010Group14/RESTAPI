use books;
DROP TABLE book_authors;
create table book_authors (
 BookId INT NOT NULL,
-- 	FOREIGN KEY(BookId)
--     REFERENCES books(id)
--     ON DELETE CASCADE,
 AuthorId INT NOT NULL
-- 	FOREIGN KEY(AuthorId)
--     REFERENCES authors(id)
--     ON DELETE CASCADE
);