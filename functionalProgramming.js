// Array objek buku, masing-masing berisi properti title, author, dan sales
const books = [
    { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
    { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
    { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
    { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
    { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
    { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
    { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
  ];
  
  // Memfilter buku-buku dengan penjualan lebih dari 1.000.000 dan memetakan ke array baru berisi string
  const greatAuthors = books
    .filter(book => book.sales > 1000000) // Memfilter buku-buku yang memiliki penjualan lebih dari 1.000.000
    .map(book => `${book.author} adalah penulis buku ${book.title} yang sangat hebat!`); // Memetakan setiap buku yang difilter menjadi sebuah string
  
// `greatAuthors` sekarang berisi array string yang menyoroti penulis dan buku best-seller mereka
  