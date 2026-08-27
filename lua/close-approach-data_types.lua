-- Typed models for the CloseApproachData SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Cadapi
---@field count number
---@field data? table
---@field fields? table
---@field signature table
---@field total? number

---@class CadapiListMatch
---@field body? string
---@field class? string
---@field comet? boolean
---@field date_max? string
---@field date_min? string
---@field des? string
---@field diameter? boolean
---@field dist_max? string
---@field dist_min? string
---@field fullname? boolean
---@field h_max? number
---@field h_min? number
---@field kind? string
---@field limit? number
---@field limit_from? number
---@field min_dist_max? string
---@field min_dist_min? string
---@field nea? boolean
---@field nea_comet? boolean
---@field neo? boolean
---@field pha? boolean
---@field sort? string
---@field spk? number
---@field total_only? boolean
---@field v_inf_max? number
---@field v_inf_min? number
---@field v_rel_max? number
---@field v_rel_min? number

local M = {}

return M
