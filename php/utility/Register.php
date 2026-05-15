<?php
declare(strict_types=1);

// CloseApproachData SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

CloseApproachDataUtility::setRegistrar(function (CloseApproachDataUtility $u): void {
    $u->clean = [CloseApproachDataClean::class, 'call'];
    $u->done = [CloseApproachDataDone::class, 'call'];
    $u->make_error = [CloseApproachDataMakeError::class, 'call'];
    $u->feature_add = [CloseApproachDataFeatureAdd::class, 'call'];
    $u->feature_hook = [CloseApproachDataFeatureHook::class, 'call'];
    $u->feature_init = [CloseApproachDataFeatureInit::class, 'call'];
    $u->fetcher = [CloseApproachDataFetcher::class, 'call'];
    $u->make_fetch_def = [CloseApproachDataMakeFetchDef::class, 'call'];
    $u->make_context = [CloseApproachDataMakeContext::class, 'call'];
    $u->make_options = [CloseApproachDataMakeOptions::class, 'call'];
    $u->make_request = [CloseApproachDataMakeRequest::class, 'call'];
    $u->make_response = [CloseApproachDataMakeResponse::class, 'call'];
    $u->make_result = [CloseApproachDataMakeResult::class, 'call'];
    $u->make_point = [CloseApproachDataMakePoint::class, 'call'];
    $u->make_spec = [CloseApproachDataMakeSpec::class, 'call'];
    $u->make_url = [CloseApproachDataMakeUrl::class, 'call'];
    $u->param = [CloseApproachDataParam::class, 'call'];
    $u->prepare_auth = [CloseApproachDataPrepareAuth::class, 'call'];
    $u->prepare_body = [CloseApproachDataPrepareBody::class, 'call'];
    $u->prepare_headers = [CloseApproachDataPrepareHeaders::class, 'call'];
    $u->prepare_method = [CloseApproachDataPrepareMethod::class, 'call'];
    $u->prepare_params = [CloseApproachDataPrepareParams::class, 'call'];
    $u->prepare_path = [CloseApproachDataPreparePath::class, 'call'];
    $u->prepare_query = [CloseApproachDataPrepareQuery::class, 'call'];
    $u->result_basic = [CloseApproachDataResultBasic::class, 'call'];
    $u->result_body = [CloseApproachDataResultBody::class, 'call'];
    $u->result_headers = [CloseApproachDataResultHeaders::class, 'call'];
    $u->transform_request = [CloseApproachDataTransformRequest::class, 'call'];
    $u->transform_response = [CloseApproachDataTransformResponse::class, 'call'];
});
