<?php
declare(strict_types=1);

// CloseApproachData SDK exists test

require_once __DIR__ . '/../closeapproachdata_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = CloseApproachDataSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
