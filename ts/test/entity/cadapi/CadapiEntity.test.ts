

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CloseApproachDataSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('CadapiEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOSE_APPROACH_DATA_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOSE_APPROACH_DATA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloseApproachDataSDK.test()
    const ent = testsdk.Cadapi()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOSE_APPROACH_DATA_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'cadapi.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"count","req":true,"short":"Number of records returned","type":"`$NUMBER`","index$":0},{"active":true,"name":"data","req":false,"short":"Array of close-approach records","type":"`$ARRAY`","union":{"branches":2,"count":1,"depth":2},"index$":1},{"active":true,"name":"fields","req":false,"short":"Field names corresponding to data array elements","type":"`$ARRAY`","index$":2},{"active":true,"name":"signature","req":true,"type":"`$OBJECT`","index$":3},{"active":true,"name":"total","req":false,"short":"Total number of matching records (when limit is used)","type":"`$NUMBER`","index$":4}],"name":"cadapi","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"Earth","kind":"query","name":"body","orig":"body","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"ATE","kind":"query","name":"class","orig":"class","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":false,"kind":"query","name":"comet","orig":"comet","reqd":false,"type":"`$BOOLEAN`","index$":2},{"active":true,"example":"2100-01-01","kind":"query","name":"date_max","orig":"date_max","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"example":"2018-01-01","kind":"query","name":"date_min","orig":"date_min","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"example":"433","kind":"query","name":"des","orig":"des","reqd":false,"type":"`$STRING`","index$":5},{"active":true,"example":false,"kind":"query","name":"diameter","orig":"diameter","reqd":false,"type":"`$BOOLEAN`","index$":6},{"active":true,"example":"0.2","kind":"query","name":"dist_max","orig":"dist_max","reqd":false,"type":"`$STRING`","index$":7},{"active":true,"example":"0.05","kind":"query","name":"dist_min","orig":"dist_min","reqd":false,"type":"`$STRING`","index$":8},{"active":true,"example":false,"kind":"query","name":"fullname","orig":"fullname","reqd":false,"type":"`$BOOLEAN`","index$":9},{"active":true,"kind":"query","name":"h_max","orig":"h_max","reqd":false,"type":"`$NUMBER`","index$":10},{"active":true,"kind":"query","name":"h_min","orig":"h_min","reqd":false,"type":"`$NUMBER`","index$":11},{"active":true,"kind":"query","name":"kind","orig":"kind","reqd":false,"type":"`$STRING`","index$":12},{"active":true,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":13},{"active":true,"kind":"query","name":"limit_from","orig":"limit_from","reqd":false,"type":"`$INTEGER`","index$":14},{"active":true,"kind":"query","name":"min_dist_max","orig":"min_dist_max","reqd":false,"type":"`$STRING`","index$":15},{"active":true,"kind":"query","name":"min_dist_min","orig":"min_dist_min","reqd":false,"type":"`$STRING`","index$":16},{"active":true,"example":false,"kind":"query","name":"nea","orig":"nea","reqd":false,"type":"`$BOOLEAN`","index$":17},{"active":true,"example":false,"kind":"query","name":"nea_comet","orig":"nea_comet","reqd":false,"type":"`$BOOLEAN`","index$":18},{"active":true,"example":true,"kind":"query","name":"neo","orig":"neo","reqd":false,"type":"`$BOOLEAN`","index$":19},{"active":true,"example":false,"kind":"query","name":"pha","orig":"pha","reqd":false,"type":"`$BOOLEAN`","index$":20},{"active":true,"example":"date","kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$STRING`","index$":21},{"active":true,"example":2000433,"kind":"query","name":"spk","orig":"spk","reqd":false,"type":"`$INTEGER`","index$":22},{"active":true,"example":false,"kind":"query","name":"total_only","orig":"total_only","reqd":false,"type":"`$BOOLEAN`","index$":23},{"active":true,"kind":"query","name":"v_inf_max","orig":"v_inf_max","reqd":false,"type":"`$NUMBER`","index$":24},{"active":true,"kind":"query","name":"v_inf_min","orig":"v_inf_min","reqd":false,"type":"`$NUMBER`","index$":25},{"active":true,"kind":"query","name":"v_rel_max","orig":"v_rel_max","reqd":false,"type":"`$NUMBER`","index$":26},{"active":true,"kind":"query","name":"v_rel_min","orig":"v_rel_min","reqd":false,"type":"`$NUMBER`","index$":27}]},"contract":{"id":"GET /cad.api","json":"{\"operationId\":\"getCloseApproachData\",\"parameters\":[{\"description\":\"Exclude data earlier than this date. Format: YYYY-MM-DD or YYYY-MM-DDThh:mm:ss or 'now' for current date\",\"example\":\"2018-01-01\",\"in\":\"query\",\"name\":\"date-min\",\"required\":false,\"schema\":{\"default\":\"now\",\"type\":\"string\"}},{\"description\":\"Exclude data later than this date. Format: YYYY-MM-DD or YYYY-MM-DDThh:mm:ss or 'now' or +D for D days after now (e.g., +60). Note: URL-encode the plus sign as %2B\",\"example\":\"2100-01-01\",\"in\":\"query\",\"name\":\"date-max\",\"required\":false,\"schema\":{\"default\":\"+60\",\"type\":\"string\"}},{\"description\":\"Exclude data with approach distance less than this value (default units: au). Example: 0.05 or 10LD\",\"example\":\"0.05\",\"in\":\"query\",\"name\":\"dist-min\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Exclude data with approach distance greater than this value (default units: au). Example: 0.2 or 10LD\",\"example\":\"0.2\",\"in\":\"query\",\"name\":\"dist-max\",\"required\":false,\"schema\":{\"default\":\"0.05\",\"type\":\"string\"}},{\"description\":\"Exclude data with approach minimum-distance less than this value (default units: au)\",\"in\":\"query\",\"name\":\"min-dist-min\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Exclude data with approach minimum-distance greater than this value (default units: au)\",\"in\":\"query\",\"name\":\"min-dist-max\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Exclude data from objects with H-values less than this (smaller objects). Example: 22\",\"in\":\"query\",\"name\":\"h-min\",\"required\":false,\"schema\":{\"type\":\"number\"}},{\"description\":\"Exclude data from objects with H-values greater than this (larger objects). Example: 17.75\",\"in\":\"query\",\"name\":\"h-max\",\"required\":false,\"schema\":{\"type\":\"number\"}},{\"description\":\"Exclude data with V-infinity less than this positive value in km/s. Example: 18.5\",\"in\":\"query\",\"name\":\"v-inf-min\",\"required\":false,\"schema\":{\"type\":\"number\"}},{\"description\":\"Exclude data with V-infinity greater than this positive value in km/s. Example: 20\",\"in\":\"query\",\"name\":\"v-inf-max\",\"required\":false,\"schema\":{\"type\":\"number\"}},{\"description\":\"Exclude data with V-relative less than this positive value in km/s. Example: 11.2\",\"in\":\"query\",\"name\":\"v-rel-min\",\"required\":false,\"schema\":{\"type\":\"number\"}},{\"description\":\"Exclude data with V-relative greater than this positive value in km/s. Example: 19\",\"in\":\"query\",\"name\":\"v-rel-max\",\"required\":false,\"schema\":{\"type\":\"number\"}},{\"description\":\"Limit data to objects with the specified orbit-class. Valid values: IEO, ATE, APO, AMO, MCA, IMB, MBA, OMB, TJN, CEN, TNO, PAA, HYA, HYP, PAR, COM, JFC, HTC, ETc, CTc, JFc\",\"example\":\"ATE\",\"in\":\"query\",\"name\":\"class\",\"required\":false,\"schema\":{\"enum\":[\"IEO\",\"ATE\",\"APO\",\"AMO\",\"MCA\",\"IMB\",\"MBA\",\"OMB\",\"TJN\",\"CEN\",\"TNO\",\"PAA\",\"HYA\",\"HYP\",\"PAR\",\"COM\",\"JFC\",\"HTC\",\"ETc\",\"CTc\",\"JFc\"],\"type\":\"string\"}},{\"description\":\"Limit data to Potentially Hazardous Asteroids (PHAs)\",\"in\":\"query\",\"name\":\"pha\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"Limit data to Near-Earth Asteroids (NEAs)\",\"in\":\"query\",\"name\":\"nea\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"Limit data to comets\",\"in\":\"query\",\"name\":\"comet\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"Limit data to NEAs and comets\",\"in\":\"query\",\"name\":\"nea-comet\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"Limit data to Near-Earth Objects (NEOs)\",\"in\":\"query\",\"name\":\"neo\",\"required\":false,\"schema\":{\"default\":true,\"type\":\"boolean\"}},{\"description\":\"Limit data to objects of specified kind: a=asteroid, an=numbered-asteroids, au=unnumbered-asteroids, c=comets, cn=numbered-comets, cu=unnumbered-comets, n=numbered-objects, u=unnumbered-objects\",\"in\":\"query\",\"name\":\"kind\",\"required\":false,\"schema\":{\"enum\":[\"a\",\"an\",\"au\",\"c\",\"cn\",\"cu\",\"n\",\"u\"],\"type\":\"string\"}},{\"description\":\"Only data for the object matching this SPK-ID. Example: 2000433\",\"example\":2000433,\"in\":\"query\",\"name\":\"spk\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"Only data for the object matching this designation. Example: 433 or 2015 AB or 141P. Note: Replace spaces with %20 in query string\",\"example\":\"433\",\"in\":\"query\",\"name\":\"des\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Limit data to close-approaches to the specified body or use ALL or * for all bodies. Valid values: Merc, Venus, Earth, Mars, Juptr, Satrn, Urnus, Neptn, Pluto, Moon\",\"example\":\"Earth\",\"in\":\"query\",\"name\":\"body\",\"required\":false,\"schema\":{\"default\":\"Earth\",\"enum\":[\"Merc\",\"Venus\",\"Earth\",\"Mars\",\"Juptr\",\"Satrn\",\"Urnus\",\"Neptn\",\"Pluto\",\"Moon\",\"ALL\",\"*\"],\"type\":\"string\"}},{\"description\":\"Sort data on specified field: date, dist, dist-min, v-inf, v-rel, h, or object. Prepend '-' for descending order\",\"example\":\"date\",\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"schema\":{\"default\":\"date\",\"enum\":[\"date\",\"dist\",\"dist-min\",\"v-inf\",\"v-rel\",\"h\",\"object\",\"-date\",\"-dist\",\"-dist-min\",\"-v-inf\",\"-v-rel\",\"-h\",\"-object\"],\"type\":\"string\"}},{\"description\":\"Limit data to first N results (integer greater than zero). Also outputs total available matching records\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Limit data to results starting from record N (integer greater than zero). Requires limit parameter\",\"in\":\"query\",\"name\":\"limit-from\",\"required\":false,\"schema\":{\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Output only the total number of records matching the filter, ignoring limit and limit-from. No data output\",\"in\":\"query\",\"name\":\"total-only\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"Include known diameter and diameter_sigma values in output\",\"in\":\"query\",\"name\":\"diameter\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"Include full-format object name/designation in output\",\"in\":\"query\",\"name\":\"fullname\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"successWithData\":{\"summary\":\"Successful response with 3 records\",\"value\":{\"count\":3,\"data\":[[\"153814\",\"174\",\"2461948.724524223\",\"2028-Jun-26 05:23\",\"0.00166253924938707\",\"0.00166237672775144\",\"0.00166270177137481\",\"10.2426019613426\",\"10.084918538826\",\"< 00:01\",\"18.33\",\"0.932\",\"0.011\",\"153814 (2001 WN5)\"],[\"99942\",\"206\",\"2462240.407091595\",\"2029-Apr-13 21:46\",\"0.000254099098170977\",\"0.000254085852623379\",\"0.000254112343772133\",\"7.42249308586014\",\"5.84135545611464\",\"< 00:01\",\"19.7\",\"0.34\",\"0.04\",\" 99942 Apophis (2004 MN4)\"],[\"2001 AV43\",\"42\",\"2462452.142037054\",\"2029-Nov-11 15:25\",\"0.00209271674918052\",\"0.00209125158265035\",\"0.00209418316351851\",\"3.99789389003422\",\"3.66561381185116\",\"00:03\",\"24.6\",null,null,\" (2001 AV43)\"]],\"fields\":[\"des\",\"orbit_id\",\"jd\",\"cd\",\"dist\",\"dist_min\",\"dist_max\",\"v_rel\",\"v_inf\",\"t_sigma_f\",\"h\",\"diameter\",\"diameter_sigma\",\"fullname\"],\"signature\":{\"source\":\"NASA/JPL SBDB Close Approach Data API\",\"version\":\"1.5\"}}},\"zeroResults\":{\"summary\":\"Successful response with no matching data\",\"value\":{\"count\":0,\"signature\":{\"source\":\"NASA/JPL SBDB Close Approach Data API\",\"version\":\"1.5\"}}}},\"schema\":{\"properties\":{\"count\":{\"description\":\"Number of records returned\",\"example\":3,\"type\":\"number\"},\"data\":{\"description\":\"Array of close-approach records\",\"items\":{\"description\":\"Single close-approach record with fields in order: des, orbit_id, jd, cd, dist, dist_min, dist_max, v_rel, v_inf, t_sigma_f, body (optional), h, diameter (optional), diameter_sigma (optional), fullname (optional)\",\"items\":{\"oneOf\":[{\"type\":\"string\"},{\"type\":\"number\"},{\"type\":\"null\"}]},\"type\":\"array\"},\"type\":\"array\"},\"fields\":{\"description\":\"Field names corresponding to data array elements\",\"example\":[\"des\",\"orbit_id\",\"jd\",\"cd\",\"dist\",\"dist_min\",\"dist_max\",\"v_rel\",\"v_inf\",\"t_sigma_f\",\"h\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"signature\":{\"properties\":{\"source\":{\"description\":\"Source of the data\",\"example\":\"NASA/JPL SBDB Close Approach Data API\",\"type\":\"string\"},\"version\":{\"description\":\"API version\",\"example\":\"1.5\",\"type\":\"string\"}},\"required\":[\"source\",\"version\"],\"type\":\"object\"},\"total\":{\"description\":\"Total number of matching records (when limit is used)\",\"type\":\"number\"}},\"required\":[\"signature\",\"count\"],\"type\":\"object\"}}},\"description\":\"Successful response with close-approach data\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message describing the issue\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error information\",\"type\":\"string\"},\"signature\":{\"properties\":{\"source\":{\"type\":\"string\"},\"version\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Bad Request - Invalid keywords and/or content\"},\"405\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message describing the issue\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error information\",\"type\":\"string\"},\"signature\":{\"properties\":{\"source\":{\"type\":\"string\"},\"version\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Method Not Allowed - Incorrect HTTP method used\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message describing the issue\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error information\",\"type\":\"string\"},\"signature\":{\"properties\":{\"source\":{\"type\":\"string\"},\"version\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Internal Server Error - Database not available\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message describing the issue\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error information\",\"type\":\"string\"},\"signature\":{\"properties\":{\"source\":{\"type\":\"string\"},\"version\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Service Unavailable - Server temporarily overloaded or under maintenance\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/cad.api","segments":[{"lit":"cad.api"}],"select":{"exist":["body","class","comet","date_max","date_min","des","diameter","dist_max","dist_min","fullname","h_max","h_min","kind","limit","limit_from","min_dist_max","min_dist_min","nea","nea_comet","neo","pha","sort","spk","total_only","v_inf_max","v_inf_min","v_rel_max","v_rel_min"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"cadapi","name__orig":"cadapi","Name":"Cadapi","name_":"cadapi","name-":"cadapi","NAME":"CADAPI","index$":0}, {"active":true,"entity":"cadapi","key$":"BasicCadapiFlow","kind":"basic","name":"BasicCadapiFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"cadapi_ref01"}}],"index$":0}]}, 'Cadapi')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let cadapi_ref01_data = Object.values(setup.data.existing.cadapi)[0] as any

    // LIST
    const cadapi_ref01_ent = client.Cadapi()
    const cadapi_ref01_match: any = {}

    const cadapi_ref01_list = (await cadapi_ref01_ent.list(cadapi_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/cadapi/CadapiTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CloseApproachDataSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['cadapi01','cadapi02','cadapi03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOSE_APPROACH_DATA_TEST_CADAPI_ENTID': idmap,
    'CLOSE_APPROACH_DATA_TEST_LIVE': 'FALSE',
    'CLOSE_APPROACH_DATA_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['CLOSE_APPROACH_DATA_TEST_CADAPI_ENTID']

  const live = 'TRUE' === env.CLOSE_APPROACH_DATA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOSE_APPROACH_DATA_TEST_CADAPI_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CloseApproachDataSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.CLOSE_APPROACH_DATA_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
