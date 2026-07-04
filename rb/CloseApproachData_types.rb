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
# @!attribute [rw] field
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
  :field,
  :signature,
  :total,
  keyword_init: true
)

# Match filter for Cadapi#list (any subset of Cadapi fields).
#
# @!attribute [rw] count
#   @return [Float, nil]
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] field
#   @return [Array, nil]
#
# @!attribute [rw] signature
#   @return [Hash, nil]
#
# @!attribute [rw] total
#   @return [Float, nil]
CadapiListMatch = Struct.new(
  :count,
  :data,
  :field,
  :signature,
  :total,
  keyword_init: true
)

