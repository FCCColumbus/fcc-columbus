import { ScrollToTopOnMount } from '../ScrollToTopOnMount'

describe('ScrollToTopOnMount', () => {
  it('should render', () => {
    const instance = new ScrollToTopOnMount({ children: '' })

    expect(instance.render()).toBeTruthy()
  })

  describe('componentDidUpdate', () => {
    it('should', () => {})
  })

  describe('hashLinkScroll', () => {
    it('should', () => {})
  })
})
