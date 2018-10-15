import Admins, { sortArrayByName, Card } from '../Admins'

describe('sortArrayByName', () => {
  const arrayToSort = [
    {
      name: {
        first: 'john',
        last: 'two',
      },
    },
    {
      name: {
        first: 'user',
        last: 'two',
      },
    },
    {
      name: {
        first: 'user',
        last: 'two',
      },
    },
  ]

  it('should sort array of objects by name', () => {
    const result = sortArrayByName(arrayToSort)

    expect(result).toEqual([
      { name: { first: 'john', last: 'two' } },
      { name: { first: 'user', last: 'two' } },
      { name: { first: 'user', last: 'two' } },
    ])
  })
})

describe('Card', () => {
  let props

  beforeEach(() => {
    props = {
      name: 'John',
      title: 'developer',
      url: 'https://fcccolumbus.com',
      image: '',
    }
  })
  it('should render', () => {
    const instance = Card(props)

    expect(instance).toBeTruthy()
  })
})

describe('Admins', () => {
  it('should render', () => {
    const admins = [
      {
        name: {
          first: 'user',
          last: 'two',
        },
        title: 'developer',
        url: 'https://fcccolumbus.com',
        image: '',
      },
      {
        name: {
          first: 'user',
          last: 'one',
        },
        title: 'developer',
        url: 'https://fcccolumbus.com',
        image: '',
      },
    ]
    const instance = Admins({ admins })

    expect(instance).toBeTruthy()
  })
})
