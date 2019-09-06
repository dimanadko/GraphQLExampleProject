const booksData = [
  { id: 1, name: "Критика чистого разума", genre: "философия", authorId: 1 },
  {
    id: 2,
    name: "Современные операционные системы",
    genre: "програмирование",
    authorId: 2
  },
  {
    id: 3,
    name: "Приступление и наказание",
    genre: "художественная",
    authorId: 3
  },
  { id: 4, name: "Критика способности мышления", genre: "философия", authorId: 1 },
];

const authorsData = [
  { id: 1, name: "Эмануил Кант", age: 34 },
  { id: 2, name: "Таненбаум", age: 27 },
  { id: 3, name: "Достоевский", age: 42 }
];

module.exports = {
  booksData,
  authorsData
};
