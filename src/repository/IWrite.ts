export interface IWrite<T> {
  create(item: Partial<T>): Promise<number>;
  update(id: number, item: Partial<T>): Promise<boolean>;
  delete(id: number): Promise<boolean>;
}