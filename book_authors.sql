use bookIBSN;
DROP TABLE book_authors;
create table book_authors (
 BookId INT NOT NULL,
-- 	FOREIGN KEY(BookId)
--     REFERENCES bookIBSN(id)
--     ON DELETE CASCADE,
 AuthorId INT NOT NULL
-- 	FOREIGN KEY(AuthorId)
--     REFERENCES authors(id)
--     ON DELETE CASCADE
);