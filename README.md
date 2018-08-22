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
## EngineJS.Events
### Descrição:
A classe que contém a maioria dos  eventos  de um objeto por se tratar de uma __Classe abstrata__ à mesma não deve ser instanciada ela serve de base para a criação das outras .
### Métodos
Nome | Modo de uso | Descrição | Argumentos
-----|-------------|-----------|-----------
setActionsClick | obj.setActionsClick(function(){console.log("hello world");}) |- Adiciona um evento de click para o objeto |fn: function
setActionsDblClick | obj.setActionsDblClick(function(){console.log("hello world");}) | - Adiciona um evento de doubleClick para o objeto | fn: function
setActionsMouseOver | obj.setActionsMouseOver(function(){console.log("hello world");}) | - Adiciona um evento de mouseover para o objeto | fn : function
setActionsMouseOut | obj.setActionsMouseOut(function(){console.log("hello world");}) | - Adiciona um evento de mouseout para o objeto | fn : function
setActionsMouseEnter | obj.setActionsMouseEnter(function(){console.log("hello world");}) | - Adiciona um evento de mousenter para o objeto | fn: function
setActionsMouseLeave | obj.setActionsMouseLeave(function(){console.log("hello world");}) | - Adiciona um evento de mouseleave para o objeto | fn: function
setActionsMouseDown | obj.setActionsMouseDown(function(){console.log("hello world");}) | -  Adiciona um evento de mousedown para o objeto | fn: function
setActionsMouseUp  | obj.setActionsMouseUp(function(){console.log("hello world");})  | - Adiciona um evento de mouseup para o objeto | fn : function
setActionsMouseMove | obj.setActionsMouseMove(function(){console.log("hello world");}) | - Adiciona um evento de mousemove para o objeto | fn:function
setActionsTouchStart | obj.setActionsTouchStart(function(){console.log("hello world");}) | - Adiciona um evento de touchstart para o objeto | fn: function
setActionsTouchEnd | obj.setActionsTouchEnd(function(){console.log("hello world");}) | - Adiciona um evento de touchend para o objeto | fn: function
setActionsTouchMove | obj.setActionsTouchMove(function(){console.log("hello world");}) | - Adiciona um evento de touchmove para o objeto | fn: function
setActionsFocus | obj.setActionsFocus(function(){console.log("hello world");}) | - Adiciona um evento de focus para o objeto | fn: function
setActionsSwipeLeft | obj.setActionsSwipeLeft(function(){console.log("hello world");) | - Adiciona um evento de swipeleft para o objeto | fn: function
setActionsSwipeRight | obj.setActionsSwipeRight(function(){console.log("hello world");) | - Adiciona um evento de swiperight para o objeto
setActionsKeyDown | obj.setActionsKeyDown(function(){console.log("hello world");) | - Adiciona um evento de keydown para o objeto | fn: function
setActionsKeyup | obj.setActionsKeyup(function(){console.log("hello world");) | - Adiciona um evento de keyup para o objeto | fn: function
setActionsResize | obj.setActionsResize(function(){console.log("hello world");) | - Adiciona um evento de resize para o objeto | fn: function
setActionsOnError | obj.setActionsOnError(function(){console.log("hello world");) | - Adiciona um evento de error para o objeto | fn: function
setActionsOrientationChange | obj.setActionsOrientationChange(function(){console.log("hello world");) | - Adiciona um evento de orientationchange para o objeto | fn: function
setActionsScroll | obj.setActionsScroll(function(){console.log("hello world");) | - Adiciona um evento de scroll para o objeto | fn: function
setPointerEvents | obj.setPointerEvents("none") | - Modifica os eventos de ponteiro do mouse para o objeto | events: string CSS
setActionsWheel | obj.setActionsWheel | - Adiciona um evento de mousewheel para o objeto | fn: function




## EngineJS.Element
### Descrição:
A classe principal da biblioteca que contém todas as principais propriedades e métodos para a manipulação do objeto por ser uma __classe abstrata não deve ser instanciada__ .
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
getElement | obj.getElement( ) | - Retorna o elemento DOM atual do objeto.| DOMElement
getID | obj.getID( ) | - Retorna o id atual do elemento. | string |
getClass | obj.getClass( ) | - Retorna a lista de classes css do elemento.| Array
getVisible | obj.getVisible( ) | - Retorna a visibilidade do elemento.|boolean
getOverFlow | obj.getOverFlow( ) | - Retorno o tipo de transbordamento do elemento.| string CSS
getOpacity | obj.getOpacity( ) | - Retorna o nivel de opacidade do elemento.| number
getLayer | obj.getLayer( ) | - Retorna a camada z-index do elemento.| number
getLeft | obj.getLeft( ) | - Retorna o posicionamento no eixo x.| number
getTop | obj.getTop( ) | - Retorna o posicionamento no eixo y.| number
getWidth | obj.getWidth( ) | - Retorno a largura atual do elemento.| number
getHeight | obj.getHeight( ) | - Retorna a altura total do elemento.| number
getCursor  | obj.getCursor( ) | - Retorna o tipo cursor do objeto atual | string CSS

#### setters
Nome | Modo de uso | Descrição | Argumentos
-----|-------------|-----------|------------
setID | obj.setID("meuID"); | - Modifica o id do objeto.| id: string
setVisible | obj.setVisible(true); | - Modifica a visibilidade do objeto.| visivel: boolean
setOverFlow | obj.setOverFlow("hidden"); | - Modifica o transbordamento do objeto.| overflow: string CSS
setOpacity | obj.setOpacity(0.5); | - Modifica a opacidade do objeto.| opacidade: number
setLayer | obj.setLayer(1) | - Modifica a camada de sobreposicao do objeto.| layer: number
setLeft | obj.setLeft(150) | - Modifica o posicionamento no eixo x do objeto.| x: number
setTop | obj.setTop(150) | - Modifica o posicionamento no eixo y do objeto.| y : number
setPosition | obj.setPosition(100, 400) | - Modifica ambos posicionamento nos eixos x e y do objeto.| x: number, y: number
setWidth | obj.setWidth(320) | - Modifica a largura do objeto.| width: number
setHeight | obj.setHeight(78) | - Modifica a altura do objeto.| height: number
setSize   | obj.setSize(200, 45)     | - Modifica ambos largura e altura do objeto | largura: number , altura: number
setMinWidth | obj.setMinWidth(50)    | - Modifica a larguraMinima do objeto   |  larguraMinima: number
setMaxWidth  | obj.setMaxWidth(300)   |  - Modifica a largura maxima do objeto   | larguraMaxima: number
setTransform  | obj.setTransform("rotate(90deg)")  | - Modifica a transformacao do objeto atual  | transformacao: string CSS
setTransformOrigin  |  obj.setTransformOrigin("50% 20%")  |  - Modifica o ponto de origem do objeto  |  origin: string CSS
setCursor   |  obj.setCursor("pointer")  |  - Modifica o cursor do objeto  | cursor: string CSS
setShadow  |  obj.setShadow("5px 10px #888888")   |  Modifica o nivel de sombra do objeto  |  shadow: string CSS
setClip   |  obj.setClip("rect(0px,60px,200px,0px)")  |  - Modifica a área de clip do objeto  | clipValue: string CSS
setTitle  |  obj.setTitle("title-exemplo")  |  - Modifica o atributo title do elemento  | title: string
setTabIndex  |  obj.setTabIndex(1)  | - Modifica o tabIndex do elemento  | index: integer
setFilters   |  obj.setFilters("grayscale(100%)")  |  - Modifica os filtros do objeto  | filters: string CSS

#### others
Nome | Modo de uso | Descrição | Argumentos
-----|---------|----------
addClass | obj.addClass("minha-classe") | Adiciona uma classe de css para o elemento | cs: string
removeClass | obj.removeClass("minha-classe") | Remove uma classe de css do elemento | cs: string

## EngineJS.ElementHTML
### Descrição:
Classe usada para criar DOM Elements puros sem formatação.
### Cadeia de Herança
herda de __EngineJS.Element__ , __EngineJS.Events__
### Propriedades
##### membros privados herdados 
> * _stage
> * _element
> * _styleAtual
### Métodos
Nome | Modo de uso | Descrição | Argumentos
-----|-------------|-----------|-----------
insertHTML | obj.insertHTML("<p>teste</p>") | Insere um conteudo html dentro do elemento | html: HTMLDOMElement ou string html


