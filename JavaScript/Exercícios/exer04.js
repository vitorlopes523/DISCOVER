/*
  - Buscando e contando dados em Arrays 

    Baseado em Array de Livros por categoria abaixo, faça os seguintes desafios
      
    *Contar o número de categorias e o número de livros de cada categoria
    *Contar o número de autores
    *Mostrar livros do autor Augusto Cury
    *Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor. 
*/
const bookByCategory = [ 
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker"
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Interligência Emocional",
    books: [
      {
        title: "Você é insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },

    ],
    
  }
]

const totalCategories = bookByCategory.length
console.log(totalCategories)