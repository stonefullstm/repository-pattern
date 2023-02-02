import 'dotenv/config';
import mysql, { Pool, ResultSetHeader } from "mysql2/promise";
import BaseRepository from "./BaseRepository";
const snakeize = require('snakeize');
const camelize = require('camelize');

export default abstract class MySQLBaseRepository<T> extends BaseRepository<T> {

  constructor(
    private readonly _tableName: string,
    private readonly _primaryKey: string
  ) {
    super();
  };

  public connect(): Pool {
    return mysql.createPool({
      host: process.env.MYSQL_HOST || 'localhost',
      port: Number(process.env.MYSQL_PORT) || 3306,
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD,
      database: process.env.DATABASE_NAME || 'library',
    })
  };

  async findOne(id: number | Partial<T>): Promise<T> {
    const [rows] = await this.connect().execute(
      `SELECT * FROM ${this._tableName} WHERE ${this._primaryKey} = ?`,
      [id]
    );
    const [row] = rows as T[];
    return camelize(row) as T;
  };

  async find(item?: Partial<T>): Promise<T[]> {
    let rows;
    if (item && Object.keys(snakeize(item)).length > 0) {
      const columns =  `${Object.keys(snakeize(item)).join('= ? AND ')}= ?`;
      [rows] = await this.connect()
        .execute(`SELECT * FROM ${this._tableName} WHERE ${columns}`,
        [...Object.values(<Object>item)],      
      )
    } else {
      [rows] = await this.connect().execute(`SELECT * FROM ${this._tableName}`);
    }
    return camelize(rows) as unknown as T[];
  }

  async create(item: Partial<T>): Promise<number
  > {
    const columns = Object.keys(snakeize(item)).join(', ');
    const placeholders = Object.keys(<Object>item)
      .map((_key) => '?')
      .join(', ');

    const [result] = await this.connect().execute(
      `INSERT INTO ${this._tableName} (${columns}) VALUE (${placeholders})`,
      [...Object.values(<Object>item)],
    );
    
    const { insertId } = result as ResultSetHeader ;
    return insertId;
  }

  async update(id: number, item: Partial<T>): Promise<boolean> {
    const columns =  `${Object.keys(snakeize(item)).join('= ?, ')}= ?`;
    const [result] = await this.connect().execute(
      `UPDATE ${this._tableName} SET ${columns} WHERE ${this._primaryKey} = ${id}`,
      [...Object.values(<Object>item)],
    );
    const { affectedRows } = result as ResultSetHeader ;
    return (affectedRows === 1);
  }

  async delete(id: number): Promise<boolean> {
    const [result] = await this.connect().execute(
      `DELETE FROM ${this._tableName} WHERE ${this._primaryKey} = ${id}`
    );
    const { affectedRows } = result as ResultSetHeader ;
    return (affectedRows === 1);
  }

}
