import { BookRepository } from "./models/BookRepository";

const book = new BookRepository();

( async () => {
  await book.create({ 
    title: 'Typescript for professionais',
    author: 'Stack Overflow Community'
  });
  console.table(await book.find());
  // await book.update(10, { title: 'Typescript for professionals' });
  // console.table(await book.find({ title: 'Typescript for professionals' }));
  process.exit();
})()