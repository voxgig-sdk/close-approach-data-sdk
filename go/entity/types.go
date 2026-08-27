// Typed models for the CloseApproachData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/close-approach-data-sdk/go/core"
)

// Cadapi is the typed data model for the cadapi entity.
type Cadapi struct {
	Count float64 `json:"count"`
	Data *[]any `json:"data,omitempty"`
	Fields *[]any `json:"fields,omitempty"`
	Signature map[string]any `json:"signature"`
	Total *float64 `json:"total,omitempty"`
}

// CadapiListMatch is the typed request payload for Cadapi.ListTyped.
type CadapiListMatch struct {
	Body *string `json:"body,omitempty"`
	Class *string `json:"class,omitempty"`
	Comet *bool `json:"comet,omitempty"`
	DateMax *string `json:"date_max,omitempty"`
	DateMin *string `json:"date_min,omitempty"`
	Des *string `json:"des,omitempty"`
	Diameter *bool `json:"diameter,omitempty"`
	DistMax *string `json:"dist_max,omitempty"`
	DistMin *string `json:"dist_min,omitempty"`
	Fullname *bool `json:"fullname,omitempty"`
	HMax *float64 `json:"h_max,omitempty"`
	HMin *float64 `json:"h_min,omitempty"`
	Kind *string `json:"kind,omitempty"`
	Limit *int `json:"limit,omitempty"`
	LimitFrom *int `json:"limit_from,omitempty"`
	MinDistMax *string `json:"min_dist_max,omitempty"`
	MinDistMin *string `json:"min_dist_min,omitempty"`
	Nea *bool `json:"nea,omitempty"`
	NeaComet *bool `json:"nea_comet,omitempty"`
	Neo *bool `json:"neo,omitempty"`
	Pha *bool `json:"pha,omitempty"`
	Sort *string `json:"sort,omitempty"`
	Spk *int `json:"spk,omitempty"`
	TotalOnly *bool `json:"total_only,omitempty"`
	VInfMax *float64 `json:"v_inf_max,omitempty"`
	VInfMin *float64 `json:"v_inf_min,omitempty"`
	VRelMax *float64 `json:"v_rel_max,omitempty"`
	VRelMin *float64 `json:"v_rel_min,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
