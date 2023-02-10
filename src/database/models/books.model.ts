import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';
import { ModelStatic } from '../../repository/modelStatic';

class Book extends Model {
  declare id: number;
  declare title: string;
  declare author: string;
}

Book.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: STRING(255),
    allowNull: false,
  },
  author: {
    allowNull: false,
    type: STRING(255),
  }
}, 
{
  underscored: true,
  sequelize: db,
  modelName: 'books',
  timestamps: false,
});

const BookStatic: ModelStatic = Book as ModelStatic;

export { Book, BookStatic };
