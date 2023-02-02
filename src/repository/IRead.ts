export interface IRead<T> {
  find(item: Partial<T>): Promise<T[]>;
  findOne(id: number | Partial<T>): Promise<T>;
}