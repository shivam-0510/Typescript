function editBook(bookName:string):any{
    return (bookName:string)=>{
        console.log(this.bookName);
    }
}
@editBook('Hello')()
class Book{
    bookName:string;
}

let obj=new Book();
obj.bookName;
