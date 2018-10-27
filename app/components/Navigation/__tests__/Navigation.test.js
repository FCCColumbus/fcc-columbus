import React from 'react'
import { shallow } from 'enzyme'
import Navigation from '../Navigation'

describe('Navigation', () => {
  let props

  beforeEach(() => {
    props = {
      links: [
        {
          title: 'title',
          href: 'https://fcccolumbus.com/',
        },
      ],
      menu: '',
      mobileActive: false,
      handleMobile: jest.fn(),
    }
  })

  it('should render', () => {
    const instance = Navigation(props)

    expect(instance).toBeTruthy()
  })

  it('should contain .show', () => {
    props.mobileActive = true
    const { className } = Navigation(props).props.children[1].props

    expect(className).toContain('show')
  })

  it('should trigger handleMobile onClick', () => {
    const wrapper = shallow(<Navigation {...props} />)
    wrapper
      .find('Link')
      .at(0)
      .simulate('click', new Event('click'))

    expect(props.handleMobile).toBeCalled()
  })
})
