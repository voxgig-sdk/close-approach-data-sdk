<?php
declare(strict_types=1);

// CloseApproachData SDK utility: prepare_body

class CloseApproachDataPrepareBody
{
    public static function call(CloseApproachDataContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
