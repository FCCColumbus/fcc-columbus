import { postSlackInvite } from '../api'

describe('postSlackInvite', () => {
  it('should return an object', () => {
    expect(typeof postSlackInvite()).toBe('object')
  })
})
