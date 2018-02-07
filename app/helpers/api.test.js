import axios from "axios"
import MockAdapter from "axios-mock-adapter"

import { TDD, fetchCalendarData, postSlackInvite } from "./api"
import { calendarAPI, slackAPI } from "config/config"

test("TDD should equal true", () => {
  expect(TDD).toBe(true)
})

describe("fetchCalendarData", () => {
  it("returns data when fetchCalendarData is called", done => {
    let mock = new MockAdapter(axios)
    const data = {
      data: [
        {
          date: "11 / 5",
          title: "FCC Pair Programming Meetup",
          logo: {
            src:
              "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F35472665%2F210221337119%2F1%2Foriginal.jpg?h=200&w=450&rect=0%2C0%2C2160%2C1080&s=0021277c70bf48b3ea1ea8bc67615a91",
            alt: "11 / 5 - FCC Pair Programming Meetup",
          },
          id: "37970281133",
          url:
            "https://www.eventbrite.com/e/fcc-pair-programming-meetup-tickets-37970281133?aff=ebapi",
        },
      ],
    }

    mock.onGet(calendarAPI).reply(200, {
      data: [
        {
          date: "11 / 5",
          title: "FCC Pair Programming Meetup",
          logo: {
            src:
              "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F35472665%2F210221337119%2F1%2Foriginal.jpg?h=200&w=450&rect=0%2C0%2C2160%2C1080&s=0021277c70bf48b3ea1ea8bc67615a91",
            alt: "11 / 5 - FCC Pair Programming Meetup",
          },
          id: "37970281133",
          url:
            "https://www.eventbrite.com/e/fcc-pair-programming-meetup-tickets-37970281133?aff=ebapi",
        },
      ],
    })

    fetchCalendarData().then(res => {
      expect(res).toEqual(data)
      done()
    })
  })
})

describe("postSlackInvite", () => {
  it("post field params to slack invite endpoint", done => {
    let mock = new MockAdapter(axios)
    const invite = {
      name: "John",
      email: "johndoe@test.com",
    }
    const data = {}

    mock.onPost(slackAPI, invite).reply(200, {
      data: {},
    })

    postSlackInvite().then(res => {
      expect(res).toEqual(data)
      done()
    })
  })
})
