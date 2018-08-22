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
2.  logo depois faça a variável ser uma instância da **Classe Stage** e aproveite e passe os parâmetros de __largura e altura__
````javascript
stage = new EngineJS.Stage(880,550);

````
### 4. Criando um circulo

Agora vamos adicionar ao palco que foi criado um objeto do tipo Ellipse e mudar sua cor de fundo seguindo os passos abaixo

1. Primeiro crie uma variável chamada circulo
````javascript
var circulo;

````
2. Depois faça a variável ser uma instância da classe Ellipse e preencha os parametros de **ID , X , Y , Raio**

````javascript
circulo = new EngineJS.Ellipse("meuCirculo",50,50,100);

````
### 5. Manipulando as propriedades do circulo

Com o objeto circulo criado vamos mudar sua cor de fundo tornado-o azul e também sua posição relativa ao palco em pixels.
1. Alterando a cor de fundo do circulo
````javascript
circulo.setBackgroundColor("blue");
````
2. Posicionando o circulo em relação ao palco
````javascript
circulo.setPosition(200,200);

````
### 6. Criando um texto

Vamos adicionar um texto no nosso palco utilizando a __Classe Text__ 
1. para isso, crie uma variável chamada texto.

````javascript
var texto;

````
2. Depois faça a variável ser do tipo __Text__ e passe os seguintes parâmetros de __ID , x , y__ e o __texto__ a ser mostrado.

````javascript
texto = new EngineJS.Text("meuTexto",30,77,"meuTextoVemAqui");

````
### 7. Manipulando o texto criado

Com o objeto texto criado vamos mudar o texto a ser renderizado no  browser.

1. modifique o valor do texto.

````javascript
texto.setText("meu novo texto aqui!");

````

## Isso foi apenas uma amostra da biblioteca
Se você fez corretamente deverá aparecer um circulo com a cor azul e mais um texto com a palavra "meu novo texto aqui!" no seu browser assim que a página for carregada :)<br>
      Isso foi apenas um exemplo simples e prático de uso da EngineJS e do que ela é capaz de fazer com poucas linhas de código. 
# Classes

## EngineJS.Element
### Descrição:
A classe principal da biblioteca que contém todas as principais propriedades e métodos para a manipulação do objeto por ser uma classe abstrata não deve ser instanciada .
### Cadeia de Herança
herda de __EngineJS.Events__
### Propriedades
##### membros privados
> * _stage
> * _element
> * _styleAtual
### Métodos
#### getters
Nome | Modo de uso | Descrição | Retorno
-----|---------|-----------|------------
getElement | obj.getElement( ); | - retorna o elemento DOM atual do objeto.| DOMElement
getID | obj.getID( ); | - o id atual do elemento. | string |
getClass | obj.getClass( ); | - a lista de classes css do elemento.| Array
getVisible | obj.getVisible( ); | - retorna a visibilidade do elemento.|boolean
getOverFlow | obj.getOverFlow( ); | - retorno o tipo de transbordamento do elemento.| string
getOpacity | obj.getOpacity( ); | - retorna o nivel de opacidade do elemento.| number
getLayer | obj.getLayer( ); | - retorna a camada z-index do elemento.| number
getLeft | obj.getLeft( ); | - retorna o posicionamento no eixo x.| number
getTop | obj.getTop( ); | - retorna o posicionamento no eixo y.| number
getWidth | obj.getWidth( ); | - retorno a largura atual do elemento.| number
getHeight | obj.getHeight( ); | - retorna a altura total do elemento.| number

#### setters
Nome | Modo de uso | Descrição | Argumentos
-----|-------------|-----------|------------
setID | obj.setID("meuID"); | - Modifica o id do objeto.| id: string
setVisible | obj.setVisible(true); | - Modifica a visibilidade do objeto.| visivel: boolean
setOverFlow | obj.setOverFlow("hidden"); | - Modifica o transbordamento do objeto.| overflow: string
setOpacity | obj.setOpacity(0.5); | - Modifica a opacidade do objeto.| opacidade: number
setLayer | void | - Modifica a camada de sobreposicao do objeto.|
setLeft | void | - Modifica o posicionamento no eixo x do objeto.|
setTop | void | - Modifica o posicionamento no eixo y do objeto.|
setPosition | void | - Modifica ambos posicionamento nos eixos x e y do objeto.|
setWidth | void | - Modifica a largura do objeto.|
setHeight | void | - Modifica a altura do objeto.|

#### others
Nome | Retorno | Descrição
-----|---------|----------
