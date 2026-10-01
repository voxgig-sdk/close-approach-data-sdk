"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
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
            "date_max": "v1",
            "date_min": "v1",
            "des": "433",
            "diameter": "v1",
            "dist_max": "v1",
            "dist_min": "v1",
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
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map