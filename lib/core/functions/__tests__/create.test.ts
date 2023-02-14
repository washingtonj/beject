import { describe, it, expect } from 'vitest'
import { create } from '../create'

describe('Create', () => {
  it('should create a new object within the array', () => {
    // given
    const data = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Jack' },
    ]

    // when
    const output = create({ input: data, object: { id: 4, name: 'New' } })

    // then
    expect(output).toEqual([
      { id: 4, name: 'New' },
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Jack' },
    ])
  })
})