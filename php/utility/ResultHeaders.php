<?php
declare(strict_types=1);

// CloseApproachData SDK utility: result_headers

class CloseApproachDataResultHeaders
{
    public static function call(CloseApproachDataContext $ctx): ?CloseApproachDataResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
