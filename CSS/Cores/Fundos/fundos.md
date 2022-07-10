# Fundo

Defina um fundo para nosso elemento
Sua área de atuação é a caixa toda
Por padrão, é transparente
* Exemplos
Usar núcleos solidas
Usar imagens

* Controle
a posição das imagens
se elas se repetem ou não
o tamanho delas na caixa
Usar cor e imagem juntas
Usar cor gradiente

* Para adicionar uma imagem como fundo podemos usar a propriedade background-image
Por padrão a imagem vai se repetir e podemos modificar essa opção usando a propriedade background-repeat
/* Values */
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: repeat;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;

/* Podedmos usar 2 valores: horizontal | vertical */
background-repeat: repeat space;
background-repeat: repeat repeat;
background-repeat: round space;
background-repeat: no-repeat round;

* Com a propriedade podemos mudar a posição da imagem do fundo.background-position

/* Pricipais valores */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;

* Para mudar o tamanho da imagem do fundo usamos a propriedade .background-size

/* Values */
background-size: cover;
background-size: contain;

/* Podemos usar 2 valores, o primeiro é para a largura da imagem e o segundo é para a altura */
background-size: 40% auto;
background-size: 2em 25%;
background-size: auto 8px;
background-size: auto auto;

* A propriedade é quem define o ponto de origem de uma imagem específica.background-origin
/* Principais valores */
background-origin: border-box;
background-origin: padding-box;
background-origin: content-box;
* O definir se a cor ou imagem do fundo iniciam debaixo de sua área de borda, preenchimento ou conteúdo.background-clip
/* Principais valores */
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text;

* linear-gradient() é a função usada para criar gradiente linear com o CSS.
background: linear-gradient(45deg, red, yellow)
* radial-gradient() é a função usada para criar gradiente circular.
background: radial-gradient(green, red, yellow)
background: radial-gradient(rgba(255, 255, 255, 0), rgba(255, 0, 0, 0.2))