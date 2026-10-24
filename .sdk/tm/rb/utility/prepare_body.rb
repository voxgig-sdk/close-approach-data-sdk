# CloseApproachData SDK utility: prepare_body
require_relative 'media'
module CloseApproachDataUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return CloseApproachDataUtilities.raw_body(ctx.reqdata) if CloseApproachDataUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
