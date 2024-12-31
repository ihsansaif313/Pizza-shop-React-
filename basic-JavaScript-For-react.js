// ts-worksheet

const prompt = require ("prompt-sync")({sigint: true})
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
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    
      }  ,
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
    pages: 295,
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
    pages: 223,
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
let bookId=prompt("Enter book id");
bookId=parseInt(bookId);
//Destructing
const book = getBook(bookId);
const {
  id,
  title,
  publicationDate,
  author,
  genres,
  hasMovieAdaptation,
  pages,
  translations,
  reviews,
} = book;
console.log(author, reviews.goodreads.rating);
// Output: George R. R. Martin 4.44

//following will directly assign the values to the variables.

const [PrimaryGenre, secondryGenre] = genres; //will take the first and second element of the array NOTE: we are working with array so will not put the curly braces instead we will use the square brackets
console.log(
  "Destructor(1st and 2nd element of the array:)",
  PrimaryGenre,
  secondryGenre
);
//output: fantasy high-fantasy

//RestSpread Operator

//rest opr
const [firstGenre, secondGenre, ...otherGenre] = genres; //will take the first, second and array of all other elements of the array NOTE: we are working with array so will not put the curly braces instead we will use the square brackets
console.log(
  "RestOperator(Array of all other than the prevous 1st and second:)",
  firstGenre,
  secondGenre,
  otherGenre
);
//output: fantasy high-fantasy [ 'novel', 'fantasy fiction' ]

//spread opr
const NewGenre = [genres, "comedy"]; //without spread opr! will make two arrays
console.log("without spread opr! :", NewGenre);
//output: ['fantasy','high-fantasy','adventure','fiction','novels','literature'],'comedy']

const NewGenres = [...genres, "comedy"]; //with spread opr! will make one array only
console.log("with spread opr! :", NewGenres);
//output: ['fantasy','high-fantasy','adventure', 'fiction','novels','literature','comedy']

//using spread opr to update the object or add new properties to the object but it will not update the original object
const updatedBook = { 
    ...book, // using spread opr! to copy all the properties of the book object
    MovieReleaseDate: "2021-01-02", //will add the new property to the object
    pages: 1293 //will update the existing property of the object
};
console.log(updatedBook);

//ARROW FUNCTION 
const getyear=(str)=>str.split("-")[0];

//Arrow function if its multiple lines
const PublishingMonth=(fullDate)=>{
 const month= fullDate.split('-')[1];
 return month;
}
// short-Circuiting && || ?? operators
console.log(true && "In && operater if the first one is true, second one will be executed." );
console.log(false && "In && operater if the first one is false, second one will not be executed first one will be returned.");
console.log(true || "In || operater if the first one is true, second one will not be executed first one will be returned.");
console.log(false || "In || operater if the first one is false, second one will be executed.");
//example of short-circuiting || operater
//Optional Chaining (?): This is used to safely access deeply nested properties. If book.reviews.librarything is undefined, it won't attempt to access reviewsCount, thus avoiding the error.
console.log("reviews count: ",book.reviews.librarything?.reviewsCount);
console.log("reviews count: ",book.reviews.librarything?.reviewsCount || "No Data");//if the reviewsCount is zero it will still say "No Data";
//solution
//Nullish Coalescing Operator (??): This ensures that if reviewsCount is null or undefined, it will default to "No Data".
console.log("reviews count: ",book.reviews.librarything?.reviewsCount ?? "No Data");//if the reviewsCount is zero it will return zero instead of "No Data" and if it is not zero it will return the reviewsCount;
const reviewsnumbers= book.reviews.librarything?.reviewsCount ?? " no data about "

//string literals
const summary=`${title} is a Book written by ${author} and it is a ${PrimaryGenre} book.It was released on ${getyear(publicationDate)} in month ${PublishingMonth(publicationDate)} and it has ${pages} pages having ${reviewsnumbers} reviews. ${title} is having${hasMovieAdaptation==true? ``:` no`} movie published.`;
console.log(summary);









