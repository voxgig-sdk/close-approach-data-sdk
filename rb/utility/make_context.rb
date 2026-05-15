# CloseApproachData SDK utility: make_context
require_relative '../core/context'
module CloseApproachDataUtilities
  MakeContext = ->(ctxmap, basectx) {
    CloseApproachDataContext.new(ctxmap, basectx)
  }
end
