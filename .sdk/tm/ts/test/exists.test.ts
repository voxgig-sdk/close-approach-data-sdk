
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CloseApproachDataSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CloseApproachDataSDK.test()
    equal(testsdk instanceof CloseApproachDataSDK, true,
      'CloseApproachDataSDK.test() must return a client synchronously')
  })

})
