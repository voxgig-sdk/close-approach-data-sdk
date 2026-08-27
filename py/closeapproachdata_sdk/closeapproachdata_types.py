# Typed models for the CloseApproachData SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class CadapiRequired(TypedDict):
    count: float
    signature: dict


class Cadapi(CadapiRequired, total=False):
    data: list
    fields: list
    total: float


class CadapiListMatch(TypedDict, total=False):
    body: str
    comet: bool
    date_max: str
    date_min: str
    des: str
    diameter: bool
    dist_max: str
    dist_min: str
    fullname: bool
    h_max: float
    h_min: float
    kind: str
    limit: int
    limit_from: int
    min_dist_max: str
    min_dist_min: str
    nea: bool
    nea_comet: bool
    neo: bool
    pha: bool
    sort: str
    spk: int
    total_only: bool
    v_inf_max: float
    v_inf_min: float
    v_rel_max: float
    v_rel_min: float
