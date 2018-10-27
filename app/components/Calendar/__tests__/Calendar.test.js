import Calendar, { Events, Event } from '../Calendar'

describe('Calendar', () => {
  it('should render', () => {
    const instance = Calendar()

    expect(instance).toBeTruthy()
  })
})

describe('Events', () => {
  it('should render', () => {
    const instance = Events()

    expect(instance).toBeTruthy()
  })
})

describe('Event', () => {
  const event = {
    name: '',
    url: '',
    start: '',
    logo: '',
  }
  it('should render', () => {
    const instance = Event(event)

    expect(instance).toBeTruthy()
  })
})
