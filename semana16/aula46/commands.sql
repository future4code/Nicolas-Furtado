--------------------------------
-- Criar tabela
--------------------------------
CREATE TABLE Actor(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  salary FLOAT NOT NULL,
  birth_date DATE NOT NULL,
  gender ENUM("male", "female") NOT NULL
);

--------------------------------
-- Inserir dados na tabela
--------------------------------
INSERT INTO
  Actor(name, salary, birth_date, gender)
VALUES
  (
    'Tony Ramos',
    400000,
    '1948-08-25',
    'male'
  ),
  (
    'Camila Pitanga',
    320000,
    '1977-06-14',
    'female'
  ),
  (
    'Antônio Fagundes',
    230000,
    '1949-04-10',
    'male'
  ),
  (
    'Fernanda Montenegro',
    400000,
    '1929-10-16',
    'female'
  ),
  (
    'Moacyr Franco',
    719333,
    '1936-10-05',
    'male'
  );

--------------------------------
-- Ver dados da tabela
--------------------------------
SELECT
  *
FROM
  Actor;

--------------------------------
-- Adicionando mais colunas na tabela
--------------------------------
ALTER TABLE
  Actor
ADD
  favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE
  Actor
ADD
  type VARCHAR(255) DEFAULT "NotDirector";

--------------------------------
-- Alterando colunas na tabela
--------------------------------
ALTER TABLE
  Actor CHANGE gender gender VARCHAR(100);

--------------------------------
-- Alterando linhas na tabela
--------------------------------
UPDATE
  Actor
SET
  name = "Nicolas Alexandre",
  birth_date = "2002-07-22"
WHERE
  id = 3;

UPDATE
  Actor
SET
  name = "NICOLAS ALEXANDRE"
WHERE
  name = "Nicolas Alexandre";

UPDATE
  Actor
SET
  name = "Nicolas Alexandre"
WHERE
  name = "NICOLAS ALEXANDRE";

UPDATE
  Actor
SET
  name = 'Jackie Chan',
  salary = 369415108,
  birth_date = "1940-10-05",
  gender = "male",
  favorite_ice_cream_flavor = "leemon",
  type = "Director"
WHERE
  id = 5;

UPDATE
  Actor
SET
  name = 'Jackie Chan',
  salary = 369415108,
  birth_date = "1940-10-05",
  gender = "male",
  favorite_ice_cream_flavor = "leemon",
  type = "Director"
WHERE
  id = 6;

--------------------------------
-- Deletando linhas
--------------------------------
DELETE FROM
  Actor
WHERE
  name = "Fernanda Montenegro";

DELETE FROM
  Actor
WHERE
  gender = "male"
  AND salary > 10000000000;

--------------------------------
-- Funções
--------------------------------
SELECT
  COUNT(*) AS atrizes
FROM
  Actor
WHERE
  gender = "female";

SELECT
  AVG(salary) AS media_salarial
FROM
  Actor;

SELECT
  MAX(salary) as maximo_salario
FROM
  Actor;

SELECT
  MAX(salary) as maximo_salario_feminino
FROM
  Actor
WHERE
  gender = "female";

SELECT
  COUNT(*) as atrizes
FROM
  Actor
WHERE
  gender = "female";

SELECT
  SUM(salary) as soma_dos_salarios
FROM
  Actor;

--------------------------------
-- LIMIT, ORDER BY e GROUP BY
--------------------------------
SELECT
  *
FROM
  Actor
LIMIT
  3;

SELECT
  *
FROM
  Actor
ORDER BY
  id DESC;

SELECT
  COUNT(*),
  gender
FROM
  Actor
GROUP BY
  gender;

SELECT
  salary,
  name
FROM
  Actor
ORDER BY
  salary ASC;

SELECT
  id,
  name
FROM
  Actor
ORDER BY
  name DESC;

SELECT
  salary,
  name
FROM
  Actor
ORDER BY
  salary DESC
LIMIT
  3;

SELECT
  AVG(salary), gender
FROM 
  Actor
GROUP BY 
  gender;