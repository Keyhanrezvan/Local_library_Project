function findAccountById(accounts, id) {
  return accounts.find((accountsObj)=>accountsObj.id===id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB)=>(accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1)
  )
}

function getTotalNumberOfBorrows(account={}, books=[]) {
let total =0
books.forEach((booksObj)=>{
  const {borrows}=booksObj
  borrows.forEach((borrowObj)=>{
   if (borrowObj.id===account.id) {
    total++
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
