# frozen_string_literal: true

# Typed models for the CloseApproachData SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Cadapi entity data model.
#
# @!attribute [rw] count
#   @return [Float]
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] fields
#   @return [Array, nil]
#
# @!attribute [rw] signature
#   @return [Hash]
#
# @!attribute [rw] total
#   @return [Float, nil]
Cadapi = Struct.new(
  :count,
  :data,
  :fields,
  :signature,
  :total,
  keyword_init: true
)

# Request payload for Cadapi#list.
#
# @!attribute [rw] body
#   @return [String, nil]
#
# @!attribute [rw] class
#   @return [String, nil]
#
# @!attribute [rw] comet
#   @return [Boolean, nil]
#
# @!attribute [rw] date_max
#   @return [String, nil]
#
# @!attribute [rw] date_min
#   @return [String, nil]
#
# @!attribute [rw] des
#   @return [String, nil]
#
# @!attribute [rw] diameter
#   @return [Boolean, nil]
#
# @!attribute [rw] dist_max
#   @return [String, nil]
#
# @!attribute [rw] dist_min
#   @return [String, nil]
#
# @!attribute [rw] fullname
#   @return [Boolean, nil]
#
# @!attribute [rw] h_max
#   @return [Float, nil]
#
# @!attribute [rw] h_min
#   @return [Float, nil]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] limit_from
#   @return [Integer, nil]
#
# @!attribute [rw] min_dist_max
#   @return [String, nil]
#
# @!attribute [rw] min_dist_min
#   @return [String, nil]
#
# @!attribute [rw] nea
#   @return [Boolean, nil]
#
# @!attribute [rw] nea_comet
#   @return [Boolean, nil]
#
# @!attribute [rw] neo
#   @return [Boolean, nil]
#
# @!attribute [rw] pha
#   @return [Boolean, nil]
#
# @!attribute [rw] sort
#   @return [String, nil]
#
# @!attribute [rw] spk
#   @return [Integer, nil]
#
# @!attribute [rw] total_only
#   @return [Boolean, nil]
#
# @!attribute [rw] v_inf_max
#   @return [Float, nil]
#
# @!attribute [rw] v_inf_min
#   @return [Float, nil]
#
# @!attribute [rw] v_rel_max
#   @return [Float, nil]
#
# @!attribute [rw] v_rel_min
#   @return [Float, nil]
CadapiListMatch = Struct.new(
  :body,
  :class,
  :comet,
  :date_max,
  :date_min,
  :des,
  :diameter,
  :dist_max,
  :dist_min,
  :fullname,
  :h_max,
  :h_min,
  :kind,
  :limit,
  :limit_from,
  :min_dist_max,
  :min_dist_min,
  :nea,
  :nea_comet,
  :neo,
  :pha,
  :sort,
  :spk,
  :total_only,
  :v_inf_max,
  :v_inf_min,
  :v_rel_max,
  :v_rel_min,
  keyword_init: true
)

