import { describe, it, expect } from 'vitest'
import Beject from './beject'

describe('Beject', () => {
  it('should create', () => {
    // given
    const data = [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }]
    const object = { id: 3, name: 'baz' }
    const expected = [object, ...data]

    // when
    const actual = Beject(data).create(object)

    // then
    expect(actual.data).toEqual(expected)
  })

  it('should remove', () => {
    // given
    const data = [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }]
    const index = 0
    const expected = data.slice(1)

    // when
    const actual = Beject(data).remove(index)

    // then
    expect(actual.data).toEqual(expected)
  })

  it('should update', () => {
    // given
    const data = [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }]
    const index = 0
    const object = { id: 3, name: 'baz' }
    const expected = [object, ...data.slice(1)]

    // when
    const actual = Beject(data).update(index, object)

    // then
    expect(actual.data).toEqual(expected)
  })

  it('should updateByKey', () => {
    // given
    const data = [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }]
    const index = 0
    const key = 'name'
    const value = 'baz'
    const expected = [{ id: 1, name: 'baz' }, { id: 2, name: 'bar' }]

    // when
    const actual =
      Beject(data).updateByKey(index, key, value)

    // then
    expect(actual.data).toEqual(expected)
  })
})