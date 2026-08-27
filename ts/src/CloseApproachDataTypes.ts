// Typed models for the CloseApproachData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Cadapi {
  count: number
  data?: any[]
  fields?: any[]
  signature: Record<string, any>
  total?: number
}

export interface CadapiListMatch {
  body?: string
  class?: string
  comet?: boolean
  date_max?: string
  date_min?: string
  des?: string
  diameter?: boolean
  dist_max?: string
  dist_min?: string
  fullname?: boolean
  h_max?: number
  h_min?: number
  kind?: string
  limit?: number
  limit_from?: number
  min_dist_max?: string
  min_dist_min?: string
  nea?: boolean
  nea_comet?: boolean
  neo?: boolean
  pha?: boolean
  sort?: string
  spk?: number
  total_only?: boolean
  v_inf_max?: number
  v_inf_min?: number
  v_rel_max?: number
  v_rel_min?: number
}

