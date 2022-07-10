# display: block vs display: inline

- como as caixas se comportam em relação as outras caixas
- comportamento externo das caixas

**block**
- ocupa toda a linha, colocando o próximo - elemento abixo desse
- width e height são respeitados
- pedding, margin, border irão funcionar normalmente

**inline**
- elemento ao lado do outro
- width e height não funcionam
- somente valores horizontais de margin, pedding e border.

Exemplos:
block: <p>  <div>  <section>, todos os headings <h1><h2>...
inline: <a>  <strong>  <span>  <em>