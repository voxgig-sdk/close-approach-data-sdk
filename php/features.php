<?php
declare(strict_types=1);

// CloseApproachData SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class CloseApproachDataFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new CloseApproachDataBaseFeature();
            case "test":
                return new CloseApproachDataTestFeature();
            default:
                return new CloseApproachDataBaseFeature();
        }
    }
}
