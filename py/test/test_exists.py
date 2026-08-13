# CloseApproachData SDK exists test

import pytest
from closeapproachdata_sdk import CloseApproachDataSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CloseApproachDataSDK.test(None, None)
        assert testsdk is not None
