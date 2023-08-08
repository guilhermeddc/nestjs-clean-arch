import { Entity } from '@/shared/domain/entities/entity'
import { validate as uuidValidate, v4 as uuidV4 } from 'uuid'

type StubEntityProps = {
  prop1: string
  prop2: number
}

class StubEntity extends Entity<StubEntityProps> {}

describe('Entity unit tests', () => {
  const props = { prop1: 'prop1', prop2: 2 }
  const id = uuidV4()

  it('should set props and id', () => {
    const sut = new StubEntity(props)

    expect(sut.props).toStrictEqual(props)
    expect(sut._id).not.toBeNull()
    expect(uuidValidate(sut._id)).toBeTruthy()
  })

  it('should accept a valid uuid', () => {
    const sut = new StubEntity(props, id)

    expect(uuidValidate(sut._id)).toBeTruthy()
    expect(sut._id).toEqual(id)
  })

  it('Should convert a entity toa a javascript object', () => {
    const sut = new StubEntity(props, id)

    expect(sut.toJSON()).toStrictEqual({
      id,
      ...props,
    })
  })
})
