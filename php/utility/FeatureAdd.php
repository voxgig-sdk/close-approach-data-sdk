<?php
declare(strict_types=1);

// CloseApproachData SDK utility: feature_add

class CloseApproachDataFeatureAdd
{
    public static function call(CloseApproachDataContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
