CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
SHOW DATABASES;
SHOW TABLES;
DESCRIBE Actor;
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-8-23",
"female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005",
  "Jackie Chan",
  60000000,
  "1949-04-18", 
  "male"
);
SELECT id, salary from Actor;
SELECT id, name from Actor WHERE gender = "male";
SELECT id, name from Actor WHERE gender = "female";