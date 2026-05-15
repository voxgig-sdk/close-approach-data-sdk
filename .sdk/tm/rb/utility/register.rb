# CloseApproachData SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

CloseApproachDataUtility.registrar = ->(u) {
  u.clean = CloseApproachDataUtilities::Clean
  u.done = CloseApproachDataUtilities::Done
  u.make_error = CloseApproachDataUtilities::MakeError
  u.feature_add = CloseApproachDataUtilities::FeatureAdd
  u.feature_hook = CloseApproachDataUtilities::FeatureHook
  u.feature_init = CloseApproachDataUtilities::FeatureInit
  u.fetcher = CloseApproachDataUtilities::Fetcher
  u.make_fetch_def = CloseApproachDataUtilities::MakeFetchDef
  u.make_context = CloseApproachDataUtilities::MakeContext
  u.make_options = CloseApproachDataUtilities::MakeOptions
  u.make_request = CloseApproachDataUtilities::MakeRequest
  u.make_response = CloseApproachDataUtilities::MakeResponse
  u.make_result = CloseApproachDataUtilities::MakeResult
  u.make_point = CloseApproachDataUtilities::MakePoint
  u.make_spec = CloseApproachDataUtilities::MakeSpec
  u.make_url = CloseApproachDataUtilities::MakeUrl
  u.param = CloseApproachDataUtilities::Param
  u.prepare_auth = CloseApproachDataUtilities::PrepareAuth
  u.prepare_body = CloseApproachDataUtilities::PrepareBody
  u.prepare_headers = CloseApproachDataUtilities::PrepareHeaders
  u.prepare_method = CloseApproachDataUtilities::PrepareMethod
  u.prepare_params = CloseApproachDataUtilities::PrepareParams
  u.prepare_path = CloseApproachDataUtilities::PreparePath
  u.prepare_query = CloseApproachDataUtilities::PrepareQuery
  u.result_basic = CloseApproachDataUtilities::ResultBasic
  u.result_body = CloseApproachDataUtilities::ResultBody
  u.result_headers = CloseApproachDataUtilities::ResultHeaders
  u.transform_request = CloseApproachDataUtilities::TransformRequest
  u.transform_response = CloseApproachDataUtilities::TransformResponse
}
