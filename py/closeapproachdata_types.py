# Typed models for the CloseApproachData SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Cadapi:
    count: float
    signature: dict
    data: Optional[list] = None
    field: Optional[list] = None
    total: Optional[float] = None


@dataclass
class CadapiListMatch:
    count: Optional[float] = None
    data: Optional[list] = None
    field: Optional[list] = None
    signature: Optional[dict] = None
    total: Optional[float] = None

