# CloseApproachData SDK exists test

require "minitest/autorun"
require_relative "../CloseApproachData_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = CloseApproachDataSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
