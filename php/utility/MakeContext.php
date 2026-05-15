<?php
declare(strict_types=1);

// CloseApproachData SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CloseApproachDataMakeContext
{
    public static function call(array $ctxmap, ?CloseApproachDataContext $basectx): CloseApproachDataContext
    {
        return new CloseApproachDataContext($ctxmap, $basectx);
    }
}
