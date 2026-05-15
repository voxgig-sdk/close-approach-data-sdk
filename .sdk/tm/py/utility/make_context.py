# CloseApproachData SDK utility: make_context

from core.context import CloseApproachDataContext


def make_context_util(ctxmap, basectx):
    return CloseApproachDataContext(ctxmap, basectx)
