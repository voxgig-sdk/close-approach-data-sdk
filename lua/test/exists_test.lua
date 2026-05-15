-- ProjectName SDK exists test

local sdk = require("close-approach-data_sdk")

describe("CloseApproachDataSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
