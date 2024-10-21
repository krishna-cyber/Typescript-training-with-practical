type Book = {
    id:number,
    name:string,
    price:number
}
type DiscountedBook = Book & {discount:number}

let book1:Book = {
    id:1,
    name:"Shrish ko ful",
    price:500
}
let discountedBook : DiscountedBook={
    id:2,
    name:"ramayan",
    price:1200,
    discount:200
}




console.log(book1),
console.log(discountedBook)