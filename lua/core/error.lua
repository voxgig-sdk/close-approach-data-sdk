-- CloseApproachData SDK error

local CloseApproachDataError = {}
CloseApproachDataError.__index = CloseApproachDataError


function CloseApproachDataError.new(code, msg, ctx)
  local self = setmetatable({}, CloseApproachDataError)
  self.is_sdk_error = true
  self.sdk = "CloseApproachData"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CloseApproachDataError:error()
  return self.msg
end


function CloseApproachDataError:__tostring()
  return self.msg
end


return CloseApproachDataError
