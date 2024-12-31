const prompt = require("prompt-sync")({ sigint: true });
const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 600,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 239,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
// working with full Book array
const books = getBooks();

// Map function is used to make a new array based on the origonal one and it map each element in the origonal array to a new array
const titles = books.map((book) => book.title);
console.log(titles);
//in multiple line funtion if you want to return something without return keyword
const essentialsData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));
console.log(essentialsData);

//filter function is used to make a new array based on the origonal one and it filter each element in the orignal array.
const longbook = books.filter((book) => book.pages >= 500);

//using Map and filter and include function to get the titles of only fantasy books that have more than 500 pages and have a movie adaptation.
const longbookWithMOviesTitles = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation).filter((book)=>book.genres.includes("fantasy"))
  .map((book) => book.title);
 console.log("Long  fantasy book with movie titles ", longbookWithMOviesTitles);

 //reduce method is used to reduce the elements of an array to a single value.
 const totalpages=books.reduce((Accumalator,book)=>Accumalator+(book.pages||0),0); //(book.pages || 0): This ternary operator checks if book.pages is defined and not 0. If it's defined, it adds book.pages to the Accumulator. If it's undefined or 0, it adds 0 instead.
 console.log("total pages of all books : ",totalpages);

 //sort array (warning: sort function changes the orignal array);
 const sortedBooks = [...books].slice().sort((a, b) => a.pages - b.pages);//.slice() is used to create a copy of the array so that the original array is not changed.
 console.log(sortedBooks);

 //sort number array
 const sortedNumbers = [4, 2, 9, 6, 23,11];
 console.log("sort in alphabetical order: ",sortedNumbers.sort()); //sort function changes the orignal array but in alphabetical order.
 console.log("orignal array changed to : ",sortedNumbers);
 console.log("sort in alphabetical order: ",sortedNumbers.sort((a,b)=> a-b)); //sort function changes the orignal array in ascending order.
 console.log("orignal array changed to : ",sortedNumbers);
 console.log("Without changing the orignal array: ",sortedNumbers.slice().sort()); //sort function does not change the orignal array in alphabetical order as we used slice() to create a copy of the array.
 console.log("orignal array does not changed : ",sortedNumbers);

 //working with immutable array
 //add object to the array
 const newbook={
    id:6,
    title:"The Great Gatsby",
    author:"F. Scott Fitzgerald",
    pages:180,
    genres:["classic"],
    hasMovieAdaptation:true
 };
 const booksAfterAdd=[...books,newbook];
 console.log(booksAfterAdd);

 //delete object from the array
 const booksAfterDelete=booksAfterAdd.filter((book)=>book.id != 3);
 console.log(booksAfterDelete);

 //update book object in the array
 const booksAfterUpdate=booksAfterDelete.map((book)=>book.id==1 ? {...book, pages: 1123}:{book});
 console.log(booksAfterUpdate);