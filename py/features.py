# CloseApproachData SDK feature factory

from feature.base_feature import CloseApproachDataBaseFeature
from feature.test_feature import CloseApproachDataTestFeature


def _make_feature(name):
    features = {
        "base": lambda: CloseApproachDataBaseFeature(),
        "test": lambda: CloseApproachDataTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
