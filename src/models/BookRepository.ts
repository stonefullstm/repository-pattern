import MySQLBaseRepository from "../repository/MySQLBaseRepository";
import { IBook } from "./IBook";

export class BookRepository extends MySQLBaseRepository<IBook> {
  constructor() {
    super('books', 'id');
  }
}