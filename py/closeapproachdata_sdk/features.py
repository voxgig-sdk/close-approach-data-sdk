# CloseApproachData SDK feature factory

from closeapproachdata_sdk.feature.base_feature import CloseApproachDataBaseFeature
from closeapproachdata_sdk.feature.ratelimit_feature import CloseApproachDataRatelimitFeature
from closeapproachdata_sdk.feature.retry_feature import CloseApproachDataRetryFeature
from closeapproachdata_sdk.feature.test_feature import CloseApproachDataTestFeature
from closeapproachdata_sdk.feature.timeout_feature import CloseApproachDataTimeoutFeature


_FEATURES = {
    "base": lambda: CloseApproachDataBaseFeature(),
    "ratelimit": lambda: CloseApproachDataRatelimitFeature(),
    "retry": lambda: CloseApproachDataRetryFeature(),
    "test": lambda: CloseApproachDataTestFeature(),
    "timeout": lambda: CloseApproachDataTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
