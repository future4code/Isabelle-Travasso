# Aula 48 - Relações em SQL

## Exercício 1

### **a-)** 
chave ez=xtrangeira é uma chave que permite relação com a chave primaria de outra tabela ou coluna.

### **b-)** 
```
INSERT INTO Rating 
VALUES(
  "rgt", 
  "Como não amar esses dois? Essa história de trocar de corpo, já é bastante clichê nos filmes americanos, mas o Brasil fez uma adaptação muito boa, Tony Ramos fez um ótimo papel de homem feminino, convenceu bastante. O Filme é bom, o resultado a bilheteria nacional comprova...",
  7, 
  "001"
), (
  "ged", 
  "Que filme querido! Talvez eu esteja viajando, mas achei que o filme trata de um assunto profundo sendo mostrado de um jeito leve, até engraçadinho. É agradável rs",
   3.5,
  "002"
), (
  "bvg", 
  "As opções estéticas do diretor são um tanto estranhas, especialmente para uma história que se passa sob o sol escaldante de Salvador, começando pela fotografia, com uma luz difusa em todo ambiente, fazendo parecer que a cidade está tomada por um fog londrino.",
  1.5,
  "003"
  ), (
  "hrj", 
  "Muito bom, olhei duas vezes no cinema. Ao mesmo tempo que traz cenas hilárias, o filme conduz os expectadores a reflexão e empatia com os personagens de uma forma muito sutil e leve. Super recomendo.",
  10,
  "004"
  );
```

### **c-)** 
O erro retornado diz que não foi possivel adicionar o comentário pois o filme não foi encontrado.
<p style="color:red">Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`cruz-2114563-isabelle-travasso`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`)) </p>

### **d-)** 
```
ALTER TABLE Movies DROP COLUMN rating;
```

### **e-)**
O erro retornado diz que não podemos excluir o filme pois ele possui conexão com outra tabela existente. Caso fosse excluido a outra tabela ficaria com dados incoerentes.
<p style="color:red">11:09:41	DELETE FROM Movies WHERE id = "001"	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`cruz-2114563-isabelle-travasso`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))	0.156 sec
</p>

## Exercício 2

### **a-)** 
A tabela faz relação entre os filmes e os atores que participaram do filme.

### **b-)**
 ```
 INSERT INTO MovieCast 
VALUES("001", "001"), ("002", "001"),
("004", "002"),
("003", "005"),
("003", "004"),
("001", "005");
```

### **c-)**
O erro retornado diz que não podemos relacionar linhas inexistentes.
<p style="color:red">Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`cruz-2114563-isabelle-travasso`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))</p>

### **d-)**
O erro retornado diz que não podemos excluir o ator pois ele possui conexão com outra tabela existente. Caso fosse excluido a outra tabela ficaria com dados incoerentes.
<p style="color:red">Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`cruz-2114563-isabelle-travasso`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))</p>

## Exercício 3

### **a-)** 
O operador ``ON`` serve como codicional para o inner join.

### **b-)**
```
SELECT Movies.id as movie_id, Rating.rate FROM Movies
INNER JOIN Rating ON Movies.id = Rating.movie_id;
```

## Exercício 4

### **a-)** 
```
SELECT Movies.id as movie_id, Movies.title, Rating.rate as rating, Rating.comment as comment
FROM Movies 
LEFT JOIN Rating ON Movies.id = Rating.movie_id;
```

### **b-)** 
```
SELECT Movies.id as movie_id, Movies.title, MovieCast.actor_id FROM Movies 
RIGHT JOIN MovieCast ON MovieCast.movie_id = Movies.id;
```

### **c-)** 
```
SELECT AVG(Rating.rate), Movies.id, Movies.title FROM Movies
LEFT JOIN Rating ON Movies.id = Rating.movie_id
GROUP BY (Movies.id);
```

## Exercício 5

### **a-)** 
Há necessidade de dois ``JOIN`` pois estamos conectando 3 tabelas diferentes.

### **b-)** 
```
SELECT Movies.id as movie_id, Movies.title, Actor.id as actor_id, Actor.name FROM Movies
LEFT JOIN MovieCast ON Movies.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;
```

### **c-)** 
O erro ocorre pois há uma virgula no onde deveria ser um ponto: ``m,title``
<p style="color:red">Error Code: 1054. Unknown column 'm' in 'field list'</p>

### **d-)** 
```
SELECT Movies.title, Actor.name, Rating.rate, Rating.comment FROM Movies
LEFT JOIN MovieCast ON Movies.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id
RIGHT JOIN Rating ON Rating.movie_id = Movies.id;
```

## Exercício 6

### **a-)** 
É uma relaçao de N:M, sendo que a mesma classificação pode ser dada a varios filmes diferente e cada filme pode receber mais de um oscar.

### **b-)**
```
CREATE TABLE Oscars (
	id VARCHAR(255) PRIMARY KEY,
    oscar ENUM("Óscar de melhor filme",  
    "Óscar de melhor direção", "Óscar de melhor animação", 
    "Óscar de melhor dublagem"),
	date DATE NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);
```

### **c-)**
```
INSERT INTO Oscars 
VALUES(
  "001",
  "Óscar de melhor filme",
	"1987-09-23",
    "004"),(
"002",
    "Óscar de melhor direção",
	"1998-03-03",
    "001"), (
"003",
    "Óscar de melhor animação", 
	"2004-03-18",
    "002"),(
"004",
    "Óscar de melhor direção",
	"2010-07-08",
    "003");
```

### **d-)**
```
SELECT Movies.title, Oscars.Oscar, Oscars.date FROM Movies
JOIN Oscars ON Movies.id = Oscars.movie_id;
```