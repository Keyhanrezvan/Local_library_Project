function getTotalBooksCount(books=[]) {
  return books.length
}

function getTotalAccountsCount(accounts=[]) {
  return accounts.length
}

function getBooksBorrowedCount(books=[]) {
  let total = 0
 books.forEach((booksObj)=>{
    const {borrows}=booksObj
  let checkedOut=borrows.some((borrowsObj)=>{
    return borrowsObj.returned===false
  })
    if (checkedOut===true){
    total++
    }
  })
  return total
}

function getMostCommonGenres(books=[]) {
let bookArray={}
books.forEach((booksObj)=>{
  const {genre}=booksObj
  if (bookArray.hasOwnProperty(genre)){
    bookArray[genre]+=1
  } else {bookArray[genre]=1}
})
const bookKeys=Object.keys(bookArray)
let result = bookKeys.map((genre)=>{
  let count = bookArray[genre]
  let currentObj = {name: genre, count: count}
  return currentObj
})
let sortedArray= result.sort((resultA, resultB)=>{
  return resultB.count - resultA.count
})
return sortedArray.slice(0,5)
}

function getMostPopularBooks(books) {
  books.sort((booksA,booksB)=>{
    return booksB.borrows.length-booksA.borrows.length
  })

  let result=books.map((booksObj)=>{
    const {title, borrows}=booksObj
    let count=borrows.length
    let mappedObj={name:title,count}
    return mappedObj
  })
  return result.slice(0,5)
}

function getMostPopularAuthors(books=[], authors=[]) {
let sortedBooks=books.sort((bookA,bookB)=>{
  return bookB.borrows.length - bookA.borrows.length
})
let topFiveBooks=sortedBooks.slice(0,5)
 
let result = topFiveBooks.map((bookObj)=>{
  const {authorId,borrows} = bookObj
  let foundAuthor=authors.find((authorsObj)=>{
    return authorsObj.id===authorId
})
let joinedNames= joinNames(foundAuthor.name.first, foundAuthor.name.last)

let obj= {name: joinedNames, count: borrows.length}
return obj

})
return result
}
function joinNames(first, last) {
  return `${first} ${last}`}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
