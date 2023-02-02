import { IRead } from "./IRead";
import { IWrite } from "./IWrite";

export default abstract class BaseRepository<T> implements IRead<T>, IWrite<T> {
  find(item?: Partial<T>): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
  findOne(id: number | Partial<T>): Promise<T> {
    throw new Error("Method not implemented.");
  }
  create(item: Partial<T>): Promise<number> {
    throw new Error("Method not implemented.");
  }
  update(id: number, item: Partial<T>): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  
}