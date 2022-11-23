function findAuthorById(authors, id) {
  return authors.find((authorsObj)=>authorsObj.id === id)
}

function findBookById(books, id) {
  return books.find((booksObj)=>booksObj.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let checkedOutArray=books.filter((bookObj)=>{
    const {borrows}=bookObj
    let checkedOutBook=borrows.some((borrowsObj)=>{
      return borrowsObj.returned===false
    })
    return checkedOutBook
  })
  let returnedArray = books.filter((bookObj)=>{
    const {borrows}=bookObj
    let returnedBook=borrows.every((returnedObj)=>{
      return returnedObj.returned===true
    })
    return returnedBook
  })
  return [checkedOutArray,returnedArray]
}

function getBorrowersForBook(book={}, accounts=[]) {
const {borrows}=book
let result= borrows.map((borrowsObj)=>{
  let matchingAccounts= accounts.find((accountObj)=>{
    return borrowsObj.id===accountObj.id
  })
  matchingAccounts.returned=borrowsObj.returned
  return matchingAccounts
})
return result.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
