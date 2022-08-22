SELECT * FROM `ailton-antonio-sousa`.Movies;

CREATE TABLE Movies(
id VARCHAR(255) PRIMARY KEY,
nome VARCHAR(255) not null,
sinopse TEXT NOT NUll,
lancamento DATE NOT NUll,
note FLOAT NOT NUll
);
SELECT * FROM  movies;

INSERT INTO Movies (id, nome, sinopse, lancamento, note)
VALUES(
"01",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a 
rotina do casamento. Um dia eles são atingidos por um 
fenômeno inexplicável e trocam de corpos",
"2006-06-12",
8
);

INSERT INTO Movies (id, nome, sinopse, lancamento, note)
VALUE(
"02",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-07-19",
10
);

SELECT * FROM Movies;

SELECT id , nome FROM Movies 
WHERE id ="02";

SELECT id , nome FROM Movies 
WHERE nome ="Se Eu Fosse Você";


SELECT id , nome FROM Movies 
WHERE note > 7;






