-- Esse arquivo só existe para estudo e futuras consultas
-- Query usado para deletar uma coluna.
ALTER TABLE
  Actor DROP COLUMN favorite_ice_cream_flavor;

-- Query para pesquisar ator pelo nome.
SELECT
  *
FROM
  Actor
WHERE
  name LIKE '%nicolas%';

--Query para agrupar numero de atores e atrizes
SELECT
  COUNT(*),
  gender
FROM
  Actor
GROUP BY
  gender;

--Query para criar ator
INSERT INTO
  Actor (name, gender, birth_date, salary)
VALUES
  (
    'teste',
    'male',
    '1998-05-01',
    202000
  );