import { describe, it, expect } from 'vitest'
import { updateByKey } from '../updateByKey'

describe('Update by key', () => {
  it('should update a key in an object in an array', () => {
    // given
    const input = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Jack' },
    ]

    // when
    const output = updateByKey({ input, index: 1, key: 'name', value: 'New' })

    // then
    expect(output).toEqual([
      { id: 1, name: 'John' },
      { id: 2, name: 'New' },
      { id: 3, name: 'Jack' },
    ])
  })
})