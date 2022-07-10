# Núcleos
Usamos CSS para alterar núcleos do nosso documento.

* Tipos
cor de fundo (para caixas)
cor (para textos)
cor de borda (para caixas)
outros...

* Valores
Podemos definir valores por:
palavra-chave (azul, transparente)
hexadecimal (#990011)
funções: rgb, rgba, hsl, hsla

## Valores hexademais
/*<hex-color> values 0-9 e A-F*/
color: #090; /* RED, GREEN, BLUE */
color: #009900;
color: #090a;
color:#009900aa;

## Rgb
/*<rgb()> values */
color: rgb(34, 12, 64, 0.6) /* 0-255 */
color: rgba(34, 12, 64, 0.6)

## HSL
HSL → Matiz - Saturação - Leveza

color: hsl(180, 100%, 50%, 60%)
color: hsla(180, 100%, 50%, 60%)

## valores globais
/* Global values */
color: inheritr; /* Herda a cor do elemento anterior */
color: initial; /* Volta a sua cor inicial */
color: unset; /* Pega a cor do contexto */