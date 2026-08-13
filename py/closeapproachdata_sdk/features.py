# CloseApproachData SDK feature factory

from closeapproachdata_sdk.feature.base_feature import CloseApproachDataBaseFeature
from closeapproachdata_sdk.feature.test_feature import CloseApproachDataTestFeature


def _make_feature(name):
    features = {
        "base": lambda: CloseApproachDataBaseFeature(),
        "test": lambda: CloseApproachDataTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
