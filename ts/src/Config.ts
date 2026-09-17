
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'CloseApproachData',
        slug: "close-approach-data",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://ssd-api.jpl.nasa.gov",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        cadapi: {
        },
  
    }
  }


  entity = {
    "cadapi": {
      "fields": [
        {
          "name": "count",
          "req": true,
          "short": "Number of records returned",
          "type": "`$NUMBER`"
        },
        {
          "name": "data",
          "short": "Array of close-approach records",
          "type": "`$ARRAY`",
          "union": {
            "branches": 2,
            "count": 1,
            "depth": 2
          }
        },
        {
          "name": "fields",
          "short": "Field names corresponding to data array elements",
          "type": "`$ARRAY`"
        },
        {
          "name": "signature",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "total",
          "short": "Total number of matching records (when limit is used)",
          "type": "`$NUMBER`"
        }
      ],
      "name": "cadapi",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "Earth",
                    "kind": "query",
                    "name": "body",
                    "orig": "body",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "ATE",
                    "kind": "query",
                    "name": "class",
                    "orig": "class",
                    "type": "`$STRING`"
                  },
                  {
                    "example": false,
                    "kind": "query",
                    "name": "comet",
                    "orig": "comet",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": "2100-01-01",
                    "kind": "query",
                    "name": "date_max",
                    "orig": "date_max",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "2018-01-01",
                    "kind": "query",
                    "name": "date_min",
                    "orig": "date_min",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "433",
                    "kind": "query",
                    "name": "des",
                    "orig": "des",
                    "type": "`$STRING`"
                  },
                  {
                    "example": false,
                    "kind": "query",
                    "name": "diameter",
                    "orig": "diameter",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": "0.2",
                    "kind": "query",
                    "name": "dist_max",
                    "orig": "dist_max",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "0.05",
                    "kind": "query",
                    "name": "dist_min",
                    "orig": "dist_min",
                    "type": "`$STRING`"
                  },
                  {
                    "example": false,
                    "kind": "query",
                    "name": "fullname",
                    "orig": "fullname",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "h_max",
                    "orig": "h_max",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "h_min",
                    "orig": "h_min",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "kind",
                    "orig": "kind",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "limit_from",
                    "orig": "limit_from",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "min_dist_max",
                    "orig": "min_dist_max",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "min_dist_min",
                    "orig": "min_dist_min",
                    "type": "`$STRING`"
                  },
                  {
                    "example": false,
                    "kind": "query",
                    "name": "nea",
                    "orig": "nea",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": false,
                    "kind": "query",
                    "name": "nea_comet",
                    "orig": "nea_comet",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": true,
                    "kind": "query",
                    "name": "neo",
                    "orig": "neo",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": false,
                    "kind": "query",
                    "name": "pha",
                    "orig": "pha",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": "date",
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 2000433,
                    "kind": "query",
                    "name": "spk",
                    "orig": "spk",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": false,
                    "kind": "query",
                    "name": "total_only",
                    "orig": "total_only",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "v_inf_max",
                    "orig": "v_inf_max",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "v_inf_min",
                    "orig": "v_inf_min",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "v_rel_max",
                    "orig": "v_rel_max",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "v_rel_min",
                    "orig": "v_rel_min",
                    "type": "`$NUMBER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/cad.api",
              "segments": [
                {
                  "lit": "cad.api"
                }
              ],
              "select": {
                "exist": [
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
                  "v_rel_min"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cad.api"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

