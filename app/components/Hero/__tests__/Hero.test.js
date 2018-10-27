import Hero from '../Hero'

describe('Hero', () => {
  it('should render', () => {
    const instance = Hero()

    expect(instance).toBeTruthy()
  })
})
