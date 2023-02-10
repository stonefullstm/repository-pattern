import { BookRepository } from "./models/BookRepository";

const book = new BookRepository();
// const bookSequelize = new BookSequelizeRepository();

( async () => {
  // await book.create({ 
  //   title: 'Typescript for professionais',
  //   author: 'Stack Overflow Community'
  // });
  // console.table(await book.find());
  // await book.update(10, { title: 'Typescript for professionals' });
  // console.table(await book.find({ title: 'Typescript for professionals' }));
  // const result = await bookSequelize.find({ author: "Jonathan Stark" });
  // const result = await bookSequelize.findOne({ });
  // console.log(result);
  
  process.exit();
})()