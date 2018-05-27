import MockAdapter from 'axios-mock-adapter'

import { TDD } from './api'

test('TDD should equal true', () => {
  expect(TDD).toBe(true)
})

// describe("postSlackInvite", () => {
//   it("post field params to slack invite endpoint", done => {
//     let mock = new MockAdapter(axios)
//     const invite = {
//       name: "John",
//       email: "johndoe@test.com",
//     }
//     const data = {}

//     mock.onPost(slackAPI, invite).reply(200, {
//       data: {},
//     })

//     postSlackInvite().then(res => {
//       expect(res).toEqual(data)
//       done()
//     })
//   })
// })
