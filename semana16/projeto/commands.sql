-- criando uma nova tabela de usuarios
CREATE TABLE TodoListUser (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NULL,
  nickname VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL
);

-- populando a tabela de users
INSERT INTO
  TodoListUser (name, nickname, email)
VALUES
  (
    "Janis Costadelli",
    "Janisu",
    "janis@janis.com"
  ),
  (
    "Nicolas Alexandre",
    "parkournick",
    "nicolas@nicolas.com"
  );

-- criando tabela de tarefa
CREATE TABLE TodoListTask (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  status VARCHAR(255) NOT NULL DEFAULT "to_do",
  limit_date DATE NOT NULL,
  creator_user_id INT NOT NULL,
  FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
);

-- criando tarefas
INSERT INTO
  TodoListTask (title, description, limit_date, creator_user_id)
VALUES
  (
    'lavar louça',
    "preciso terminar logo essa caramba",
    '2021-5-28',
    2
  ),
  (
    'beber agua',
    "tenho que passar a beber mais agua antes que adoeça",
    '2021-5-28',
    2
  ),
  (
    'dar comida pro gato',
    "preciso dar comida pro luffy 3 vezes ao dia",
    '2021-5-28',
    1
  ),
  (
    'terminar o projeto',
    "amo programar",
    '2021-5-28',
    1
  );

-- atualizando dados
UPDATE
  TodoListUser
SET
  nickname = "parkournick2",
  name = "Nicolas"
WHERE
  id = 2;

-- Buscar tarefas por usuario
SELECT
  TodoListTask.id,
  TodoListTask.title,
  TodoListTask.description,
  TodoListTask.limit_date,
  TodoListTask.status,
  TodoListUser.id as UserId,
  TodoListUser.nickname as UserNickname
FROM
  TodoListTask
  INNER JOIN TodoListUser ON TodoListTask.creator_user_id = TodoListUser.id
WHERE
  TodoListTask.id = 2;

SELECT * FROM TodoListTask;