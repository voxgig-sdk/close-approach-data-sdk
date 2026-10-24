import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "cadapi",
    "accessor": "Cadapi",
    "op": "list",
    "method": "GET",
    "path": "/cad.api",
    "args": [],
    "select": {
      "body": "Earth",
      "class": "ATE",
      "comet": "v1",
      "date_max": "2100-01-01",
      "date_min": "2018-01-01",
      "des": "433",
      "diameter": "v1",
      "dist_max": "0.2",
      "dist_min": "0.05",
      "fullname": "v1",
      "h_max": "v1",
      "h_min": "v1",
      "kind": "v1",
      "limit": "v1",
      "limit_from": "v1",
      "min_dist_max": "v1",
      "min_dist_min": "v1",
      "nea": "v1",
      "nea_comet": "v1",
      "neo": "v1",
      "pha": "v1",
      "sort": "date",
      "spk": 2000433,
      "total_only": "v1",
      "v_inf_max": "v1",
      "v_inf_min": "v1",
      "v_rel_max": "v1",
      "v_rel_min": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "date-min",
      "date-max",
      "dist-min",
      "dist-max",
      "min-dist-min",
      "min-dist-max",
      "h-min",
      "h-max",
      "v-inf-min",
      "v-inf-max",
      "v-rel-min",
      "v-rel-max",
      "class",
      "pha",
      "nea",
      "comet",
      "nea-comet",
      "neo",
      "kind",
      "spk",
      "des",
      "body",
      "sort",
      "limit",
      "limit-from",
      "total-only",
      "diameter",
      "fullname"
    ],
    "queryArgs": [
      {
        "name": "body",
        "wire": "body"
      },
      {
        "name": "class",
        "wire": "class"
      },
      {
        "name": "comet",
        "wire": "comet"
      },
      {
        "name": "date_max",
        "wire": "date-max"
      },
      {
        "name": "date_min",
        "wire": "date-min"
      },
      {
        "name": "des",
        "wire": "des"
      },
      {
        "name": "diameter",
        "wire": "diameter"
      },
      {
        "name": "dist_max",
        "wire": "dist-max"
      },
      {
        "name": "dist_min",
        "wire": "dist-min"
      },
      {
        "name": "fullname",
        "wire": "fullname"
      },
      {
        "name": "h_max",
        "wire": "h-max"
      },
      {
        "name": "h_min",
        "wire": "h-min"
      },
      {
        "name": "kind",
        "wire": "kind"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "limit_from",
        "wire": "limit-from"
      },
      {
        "name": "min_dist_max",
        "wire": "min-dist-max"
      },
      {
        "name": "min_dist_min",
        "wire": "min-dist-min"
      },
      {
        "name": "nea",
        "wire": "nea"
      },
      {
        "name": "nea_comet",
        "wire": "nea-comet"
      },
      {
        "name": "neo",
        "wire": "neo"
      },
      {
        "name": "pha",
        "wire": "pha"
      },
      {
        "name": "sort",
        "wire": "sort"
      },
      {
        "name": "spk",
        "wire": "spk"
      },
      {
        "name": "total_only",
        "wire": "total-only"
      },
      {
        "name": "v_inf_max",
        "wire": "v-inf-max"
      },
      {
        "name": "v_inf_min",
        "wire": "v-inf-min"
      },
      {
        "name": "v_rel_max",
        "wire": "v-rel-max"
      },
      {
        "name": "v_rel_min",
        "wire": "v-rel-min"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "signature": {
        "source": "NASA/JPL SBDB Close Approach Data API",
        "version": "1.5"
      },
      "count": 3,
      "fields": [
        "des",
        "orbit_id",
        "jd"
      ],
      "data": [
        [
          "153814",
          "174",
          "2461948.724524223"
        ],
        [
          "99942",
          "206",
          "2462240.407091595"
        ],
        [
          "2001 AV43",
          "42",
          "2462452.142037054"
        ]
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
