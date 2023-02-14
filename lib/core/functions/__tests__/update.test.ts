import { describe, it, expect } from 'vitest'
import { update } from '../update'

describe('Update', () => {
  it('should update an object in an array', () => {
    // given
    const input = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Jack' },
    ]

    // when
    const output = update({ input, index: 1, object: { id: 2, name: 'New' } })

    // then
    expect(output).toEqual([
      { id: 1, name: 'John' },
      { id: 2, name: 'New' },
      { id: 3, name: 'Jack' },
    ])
  })
})