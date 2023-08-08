import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder'
import { UserEntity, UserProps } from '../../user.entity'

describe('UserEntity unit tests', () => {
  let props: UserProps
  let sut: UserEntity

  beforeEach(() => {
    props = UserDataBuilder({})
    sut = new UserEntity(props)
  })

  it('constructor method', () => {
    expect(sut.props.name).toEqual(props.name)
    expect(sut.props.email).toEqual(props.email)
    expect(sut.props.password).toEqual(props.password)
    expect(sut.props.createdAt).toBeInstanceOf(Date)
  })

  it('name getter method', () => {
    expect(sut.name).toBeDefined()
    expect(sut.name).toEqual(props.name)
    expect(typeof sut.name).toBe('string')
  })

  it('name setter method', () => {
    sut['name'] = 'new name'

    expect(sut.name).toEqual('new name')
    expect(typeof sut.name).toBe('string')
  })

  it('email getter method', () => {
    expect(sut.email).toBeDefined()
    expect(sut.email).toEqual(props.email)
    expect(typeof sut.email).toBe('string')
  })

  it('password getter method', () => {
    expect(sut.password).toBeDefined()
    expect(sut.password).toEqual(props.password)
    expect(typeof sut.password).toBe('string')
  })

  it('password setter method', () => {
    sut['password'] = 'new password'

    expect(sut.password).toEqual('new password')
    expect(typeof sut.password).toBe('string')
  })

  it('createdAt getter method', () => {
    expect(sut.createdAt).toBeDefined()
    expect(sut.createdAt).toBeInstanceOf(Date)
  })

  it('update method', () => {
    sut.update('new name')

    expect(sut.name).toEqual('new name')
    expect(typeof sut.name).toBe('string')
  })

  it('updatePassword method', () => {
    sut.updatePassword('new password')

    expect(sut.password).toEqual('new password')
    expect(typeof sut.password).toBe('string')
  })
})
