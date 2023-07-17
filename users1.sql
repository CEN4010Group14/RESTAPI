CREATE DATABASE USERSX1;
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  email VARCHAR(255),
  home_address VARCHAR(255)
  
);

-- Create the credit_cards table
CREATE TABLE credit_cards (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  card_number VARCHAR(255),
  expiration_date VARCHAR(255),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
-- Insert 5 entries into the users table
INSERT INTO users (username, password, name, email, home_address)
VALUES
  ('user1', 'password1', 'John Doe', 'john.doe@example.com', '123 Main St'),
  ('user2', 'password2', 'Jane Smith', 'jane.smith@example.com', '456 Elm St'),
  ('user3', 'password3', 'Alice Johnson', 'alice.johnson@example.com', '789 Oak St'),
  ('user4', 'password4', 'Bob Williams', 'bob.williams@example.com', '321 Pine St'),
  ('user5', 'password5', 'Sarah Davis', 'sarah.davis@example.com', '654 Cedar St');
 

-- Insert 5 entries into the credit_cards table
INSERT INTO credit_cards (user_id, card_number, expiration_date)
VALUES
  (1, '1111111111111111', '06/25'),
  (2, '2222222222222222', '07/26'),
  (3, '3333333333333333', '08/27'),
  (4, '4444444444444444', '09/28'),
  (5, '5555555555555555', '10/29');
  use usersx;
  SELECT*FROM USERS