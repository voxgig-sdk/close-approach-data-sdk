# CloseApproachData SDK utility: make_context

from closeapproachdata_sdk.core.context import CloseApproachDataContext


def make_context_util(ctxmap, basectx):
    return CloseApproachDataContext(ctxmap, basectx)
