import { v4 as uuidV4 } from 'uuid'

export abstract class Entity<T> {
  public readonly _id: string
  public readonly props: T

  constructor(props: T, id?: string) {
    this._id = id ?? uuidV4()
    this.props = props
  }

  get id(): string {
    return this._id
  }

  toJSON(): Required<{ id: string } & T> {
    return {
      id: this._id,
      ...this.props,
    } as Required<{ id: string } & T>
  }
}
