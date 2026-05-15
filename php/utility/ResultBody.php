<?php
declare(strict_types=1);

// CloseApproachData SDK utility: result_body

class CloseApproachDataResultBody
{
    public static function call(CloseApproachDataContext $ctx): ?CloseApproachDataResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
