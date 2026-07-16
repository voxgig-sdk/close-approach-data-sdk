<?php
declare(strict_types=1);

// CloseApproachData SDK base feature

class CloseApproachDataBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CloseApproachDataContext $ctx, array $options): void {}
    public function PostConstruct(CloseApproachDataContext $ctx): void {}
    public function PostConstructEntity(CloseApproachDataContext $ctx): void {}
    public function SetData(CloseApproachDataContext $ctx): void {}
    public function GetData(CloseApproachDataContext $ctx): void {}
    public function GetMatch(CloseApproachDataContext $ctx): void {}
    public function SetMatch(CloseApproachDataContext $ctx): void {}
    public function PrePoint(CloseApproachDataContext $ctx): void {}
    public function PreSpec(CloseApproachDataContext $ctx): void {}
    public function PreRequest(CloseApproachDataContext $ctx): void {}
    public function PreResponse(CloseApproachDataContext $ctx): void {}
    public function PreResult(CloseApproachDataContext $ctx): void {}
    public function PreDone(CloseApproachDataContext $ctx): void {}
    public function PreUnexpected(CloseApproachDataContext $ctx): void {}
}
