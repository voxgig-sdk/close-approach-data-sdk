<?php
declare(strict_types=1);

// Typed models for the CloseApproachData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Cadapi entity data model. */
class Cadapi
{
    public float $count;
    public ?array $data = null;
    public ?array $fields = null;
    public array $signature;
    public ?float $total = null;
}

/** Request payload for Cadapi#list. */
class CadapiListMatch
{
    public ?string $body = null;
    public ?string $class = null;
    public ?bool $comet = null;
    public ?string $date_max = null;
    public ?string $date_min = null;
    public ?string $des = null;
    public ?bool $diameter = null;
    public ?string $dist_max = null;
    public ?string $dist_min = null;
    public ?bool $fullname = null;
    public ?float $h_max = null;
    public ?float $h_min = null;
    public ?string $kind = null;
    public ?int $limit = null;
    public ?int $limit_from = null;
    public ?string $min_dist_max = null;
    public ?string $min_dist_min = null;
    public ?bool $nea = null;
    public ?bool $nea_comet = null;
    public ?bool $neo = null;
    public ?bool $pha = null;
    public ?string $sort = null;
    public ?int $spk = null;
    public ?bool $total_only = null;
    public ?float $v_inf_max = null;
    public ?float $v_inf_min = null;
    public ?float $v_rel_max = null;
    public ?float $v_rel_min = null;
}

