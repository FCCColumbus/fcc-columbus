import { NavigationContainer } from '../NavigationContainer'

describe('NavigationContainer', () => {
  it('should render', () => {
    const instance = new NavigationContainer()

    expect(instance.render()).toBeTruthy()
  })

  describe('componentDidMount', () => {
    it('should set mobileActive to false when action is POP', () => {
      // TODO
    })
    it('should not set mobileActive to false when action is not POP', () => {
      // TODO
    })
  })

  describe('handleMobile', () => {
    it('should not setState when close is true and mobileActive is false', () => {
      // TODO
    })
    it('should set mobileActive to be the oppisite of current boolean value', () => {
      // TODO
    })
    it('should set to true when prevState.mobileActive is false', () => {
      // TODO
    })
  })
})
