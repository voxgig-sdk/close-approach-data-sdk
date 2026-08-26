
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

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
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
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
              "parts": [
                "cad.api"
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
              }
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
  config
}

