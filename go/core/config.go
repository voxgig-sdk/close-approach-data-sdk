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
						"req": true,
						"short": "Number of records returned",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "data",
						"short": "Array of close-approach records",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 2,
						},
					},
					map[string]any{
						"name": "fields",
						"short": "Field names corresponding to data array elements",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "signature",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "total",
						"short": "Total number of matching records (when limit is used)",
						"type": "`$NUMBER`",
					},
				},
				"name": "cadapi",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "Earth",
											"kind": "query",
											"name": "body",
											"orig": "body",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "ATE",
											"kind": "query",
											"name": "class",
											"orig": "class",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "comet",
											"orig": "comet",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "2100-01-01",
											"kind": "query",
											"name": "date_max",
											"orig": "date_max",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "2018-01-01",
											"kind": "query",
											"name": "date_min",
											"orig": "date_min",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "433",
											"kind": "query",
											"name": "des",
											"orig": "des",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "diameter",
											"orig": "diameter",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "0.2",
											"kind": "query",
											"name": "dist_max",
											"orig": "dist_max",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "0.05",
											"kind": "query",
											"name": "dist_min",
											"orig": "dist_min",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "fullname",
											"orig": "fullname",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "h_max",
											"orig": "h_max",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "h_min",
											"orig": "h_min",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "kind",
											"orig": "kind",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit_from",
											"orig": "limit_from",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "min_dist_max",
											"orig": "min_dist_max",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "min_dist_min",
											"orig": "min_dist_min",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "nea",
											"orig": "nea",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "nea_comet",
											"orig": "nea_comet",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "neo",
											"orig": "neo",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "pha",
											"orig": "pha",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "date",
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 2000433,
											"kind": "query",
											"name": "spk",
											"orig": "spk",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "total_only",
											"orig": "total_only",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "v_inf_max",
											"orig": "v_inf_max",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "v_inf_min",
											"orig": "v_inf_min",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "v_rel_max",
											"orig": "v_rel_max",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "v_rel_min",
											"orig": "v_rel_min",
											"type": "`$NUMBER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cad.api",
								"segments": []any{
									map[string]any{
										"lit": "cad.api",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cad.api",
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
