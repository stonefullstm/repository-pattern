import BaseRepository from "./BaseRepository";
import { ModelStatic } from "./modelStatic";

export default abstract class SequelizeBaseRepository<T> extends BaseRepository<T> {
  constructor(
    protected _model: ModelStatic,
    protected _id: string
  ) {
    super();
  };


  find(item: Partial<T>): Promise<T[]> {
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
  async delete(id: number): Promise<boolean> {
    const modelAtt = this._model.getAttributes();
    
    // const keys = Object.keys(modelAtt) as (keyof typeof modelAtt)[];
    // const index = keys.findIndex((key) => key === this._id);
    const objKey = {};
    // objKey[keys[index]] = id;
    // objKey[key] = id;
    const deletedQty = await this._model.destroy({
      where: objKey
    })
    return (deletedQty > 0);
  }


}