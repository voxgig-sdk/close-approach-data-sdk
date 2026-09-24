package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "CloseApproachData",
			"slug": "close-approach-data",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://ssd-api.jpl.nasa.gov",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"cadapi": map[string]any{},
			},
		},
		"entity": map[string]any{
			"cadapi": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "count",
						"title": "Count",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Number of records returned",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
						"short": "Array of close-approach records",
					},
					map[string]any{
						"name": "fields",
						"title": "Fields",
						"type": "`$ARRAY`",
						"short": "Field names corresponding to data array elements",
					},
					map[string]any{
						"name": "signature",
						"title": "Signature",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "total",
						"title": "Total",
						"type": "`$NUMBER`",
						"short": "Total number of matching records (when limit is used)",
					},
				},
				"name": "cadapi",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/cad.api",
								"segments": []any{
									map[string]any{
										"lit": "cad.api",
									},
								},
								"parts": []any{
									"cad.api",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "body",
											"orig": "body",
											"type": "`$STRING`",
											"kind": "query",
											"example": "Earth",
										},
										map[string]any{
											"name": "class",
											"orig": "class",
											"type": "`$STRING`",
											"kind": "query",
											"example": "ATE",
										},
										map[string]any{
											"name": "comet",
											"orig": "comet",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "date_max",
											"orig": "date_max",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2100-01-01",
										},
										map[string]any{
											"name": "date_min",
											"orig": "date_min",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2018-01-01",
										},
										map[string]any{
											"name": "des",
											"orig": "des",
											"type": "`$STRING`",
											"kind": "query",
											"example": "433",
										},
										map[string]any{
											"name": "diameter",
											"orig": "diameter",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "dist_max",
											"orig": "dist_max",
											"type": "`$STRING`",
											"kind": "query",
											"example": "0.2",
										},
										map[string]any{
											"name": "dist_min",
											"orig": "dist_min",
											"type": "`$STRING`",
											"kind": "query",
											"example": "0.05",
										},
										map[string]any{
											"name": "fullname",
											"orig": "fullname",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "h_max",
											"orig": "h_max",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "h_min",
											"orig": "h_min",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "kind",
											"orig": "kind",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit_from",
											"orig": "limit_from",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "min_dist_max",
											"orig": "min_dist_max",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "min_dist_min",
											"orig": "min_dist_min",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "nea",
											"orig": "nea",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "nea_comet",
											"orig": "nea_comet",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "neo",
											"orig": "neo",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "pha",
											"orig": "pha",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
											"kind": "query",
											"example": "date",
										},
										map[string]any{
											"name": "spk",
											"orig": "spk",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 2000433,
										},
										map[string]any{
											"name": "total_only",
											"orig": "total_only",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "v_inf_max",
											"orig": "v_inf_max",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "v_inf_min",
											"orig": "v_inf_min",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "v_rel_max",
											"orig": "v_rel_max",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "v_rel_min",
											"orig": "v_rel_min",
											"type": "`$NUMBER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"body",
										"class",
										"comet",
										"date_max",
										"date_min",
										"des",
										"diameter",
										"dist_max",
										"dist_min",
										"fullname",
										"h_max",
										"h_min",
										"kind",
										"limit",
										"limit_from",
										"min_dist_max",
										"min_dist_min",
										"nea",
										"nea_comet",
										"neo",
										"pha",
										"sort",
										"spk",
										"total_only",
										"v_inf_max",
										"v_inf_min",
										"v_rel_max",
										"v_rel_min",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
