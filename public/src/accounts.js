function findAccountById(accounts=[], id="") {
  return accounts.find((accountObj)=>accountObj.id===id)

}

function sortAccountsByLastName(accounts) {
let sorter=accounts.sort((nameA, nameB)=>{
  return nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1
})
return sorter
}

function getTotalNumberOfBorrows(account={}, books=[]) {
let total=0
books.forEach((booksObj)=>{
  const {borrows}=booksObj
  borrows.forEach((borrowid)=>{
   if (borrowid.id===account.id){
    total+= 1
  }
  })
})
return total
}

function getBooksPossessedByAccount(account={}, books=[], authors=[]) {
let matchingIdBooks= books.filter((booksObj)=>{
  const {borrows}=booksObj
  let borrowsId= borrows.find((borrowsObj)=>{
    return borrowsObj.id===account.id && borrowsObj.returned===false
  })
  return borrowsId!==undefined
})

let result= matchingIdBooks.map((booksObj)=>{
  const {authorId}=booksObj
  let authorIdResult=authors.find((authorsObj)=>{
    return authorsObj.id===authorId
  })
  booksObj.author=authorIdResult
  return booksObj
})
return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
