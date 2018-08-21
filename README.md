# EngineJS
## Biblioteca de Interatividade com Javascript e CSS

### A Web de Forma interativa usando OOP ;)<br>
### Experimente desenvolver infográficos interativos , games simples e até sites dinâmicos usando apenas javascript e CSS. 
## Comece a usar agora mesmo
A forma de uso é bem rápida e simples confira o passo a passo logo abaixo e não perca tempo e começa já a desenvolver.
No cabeçalho da página crie uma tag script e aponte o caminho aonde se encontra a EngineJS no seu computador exemplo logo abaixo:
## Adicionando as tags scripts na página

### 1. Adicione a EngineJS dentro da tag head da sua página.

`<head>`<br>
   `<meta charset="utf-8">`<br>
   `<meta name="viewport" content="width=device-width,initial-scale=1.0">`<br>
   `<script src="meuCaminho/minhaPasta/EngineJS.js" type="text/javascript"></script>`<br>
`</head>`

### 2. No corpo da página crie mais uma tag script que será sua programação usando a EngineJS exemplo:
`<body>`<br>
  `<script src="meuCaminho/minhaPasta/meuCodigo.js" type="text/javascript"></script>`<br>
  `</body>`
  
### 3. Criando o palco

Feito isso dentro do segundo script que será sua programação crie uma instância da classe **Stage** seguindo os passos logo abaixo:

1. crie uma variável chamada stage
````javascript
var stage;

````
2.  logo depois faça a variável ser uma instância da **Classe Stage** e aproveite e passe os parâmetros de largura e altura
````javascript
stage = new EngineJS.Stage(880,550);

````
### 4. Criando um circulo
