

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"count":{"a":true,"h":"Count","n":"count","r":true,"sh":"Number of records returned","t":"`$NUMBER`","key$":"count","index$":0},"data":{"a":true,"h":"Data","n":"data","r":false,"sh":"Array of close-approach records","t":"`$ARRAY`","union":{"branches":2,"count":1,"depth":2},"key$":"data","index$":1},"fields":{"a":true,"h":"Fields","n":"fields","r":false,"sh":"Field names corresponding to data array elements","t":"`$ARRAY`","key$":"fields","index$":2},"signature":{"a":true,"h":"Signature","n":"signature","r":true,"t":"`$OBJECT`","key$":"signature","index$":3},"total":{"a":true,"h":"Total","n":"total","r":false,"sh":"Total number of matching records (when limit is used)","t":"`$NUMBER`","key$":"total","index$":4}},"name":"cadapi","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /cad.api","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"Earth","k":"query","n":"body","or":"body","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"ATE","k":"query","n":"class","or":"class","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":false,"k":"query","n":"comet","or":"comet","r":false,"t":"`$BOOLEAN`","index$":2},{"a":true,"ex":"2100-01-01","k":"query","n":"date_max","or":"date_max","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":"2018-01-01","k":"query","n":"date_min","or":"date_min","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":"433","k":"query","n":"des","or":"des","r":false,"t":"`$STRING`","index$":5},{"a":true,"ex":false,"k":"query","n":"diameter","or":"diameter","r":false,"t":"`$BOOLEAN`","index$":6},{"a":true,"ex":"0.2","k":"query","n":"dist_max","or":"dist_max","r":false,"t":"`$STRING`","index$":7},{"a":true,"ex":"0.05","k":"query","n":"dist_min","or":"dist_min","r":false,"t":"`$STRING`","index$":8},{"a":true,"ex":false,"k":"query","n":"fullname","or":"fullname","r":false,"t":"`$BOOLEAN`","index$":9},{"a":true,"k":"query","n":"h_max","or":"h_max","r":false,"t":"`$NUMBER`","index$":10},{"a":true,"k":"query","n":"h_min","or":"h_min","r":false,"t":"`$NUMBER`","index$":11},{"a":true,"k":"query","n":"kind","or":"kind","r":false,"t":"`$STRING`","index$":12},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":13},{"a":true,"k":"query","n":"limit_from","or":"limit_from","r":false,"t":"`$INTEGER`","index$":14},{"a":true,"k":"query","n":"min_dist_max","or":"min_dist_max","r":false,"t":"`$STRING`","index$":15},{"a":true,"k":"query","n":"min_dist_min","or":"min_dist_min","r":false,"t":"`$STRING`","index$":16},{"a":true,"ex":false,"k":"query","n":"nea","or":"nea","r":false,"t":"`$BOOLEAN`","index$":17},{"a":true,"ex":false,"k":"query","n":"nea_comet","or":"nea_comet","r":false,"t":"`$BOOLEAN`","index$":18},{"a":true,"ex":true,"k":"query","n":"neo","or":"neo","r":false,"t":"`$BOOLEAN`","index$":19},{"a":true,"ex":false,"k":"query","n":"pha","or":"pha","r":false,"t":"`$BOOLEAN`","index$":20},{"a":true,"ex":"date","k":"query","n":"sort","or":"sort","r":false,"t":"`$STRING`","index$":21},{"a":true,"ex":2000433,"k":"query","n":"spk","or":"spk","r":false,"t":"`$INTEGER`","index$":22},{"a":true,"ex":false,"k":"query","n":"total_only","or":"total_only","r":false,"t":"`$BOOLEAN`","index$":23},{"a":true,"k":"query","n":"v_inf_max","or":"v_inf_max","r":false,"t":"`$NUMBER`","index$":24},{"a":true,"k":"query","n":"v_inf_min","or":"v_inf_min","r":false,"t":"`$NUMBER`","index$":25},{"a":true,"k":"query","n":"v_rel_max","or":"v_rel_max","r":false,"t":"`$NUMBER`","index$":26},{"a":true,"k":"query","n":"v_rel_min","or":"v_rel_min","r":false,"t":"`$NUMBER`","index$":27}]},"k":"http","m":"GET","o":"/cad.api","q":{"exist":["body","class","comet","date_max","date_min","des","diameter","dist_max","dist_min","fullname","h_max","h_min","kind","limit","limit_from","min_dist_max","min_dist_min","nea","nea_comet","neo","pha","sort","spk","total_only","v_inf_max","v_inf_min","v_rel_max","v_rel_min"]},"r":{},"s":[{"lit":"cad.api"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"cadapi","name__orig":"cadapi","Name":"Cadapi","name_":"cadapi","name-":"cadapi","NAME":"CADAPI","index$":0}, {"active":true,"entity":"cadapi","key$":"BasicCadapiFlow","kind":"basic","name":"BasicCadapiFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"cadapi_ref01"}}],"index$":0}]}, 'Cadapi', {"GET /cad.api":{"protocol":"http","operationId":"getCloseApproachData","responses":{"200":{"description":"Successful response with close-approach data","content":{"application/json":{"schema":{"type":"object","properties":{"signature":{"key$":"signature","properties":{"source":{"description":"Source of the data","example":"NASA/JPL SBDB Close Approach Data API","type":"string"},"version":{"description":"API version","example":"1.5","type":"string"}},"required":["source","version"],"type":"object"},"count":{"description":"Number of records returned","example":3,"key$":"count","type":"number"},"total":{"description":"Total number of matching records (when limit is used)","key$":"total","type":"number"},"fields":{"description":"Field names corresponding to data array elements","example":["des","orbit_id","jd","cd","dist","dist_min","dist_max","v_rel","v_inf","t_sigma_f","h"],"items":{"type":"string"},"key$":"fields","type":"array"},"data":{"description":"Array of close-approach records","items":{"description":"Single close-approach record with fields in order: des, orbit_id, jd, cd, dist, dist_min, dist_max, v_rel, v_inf, t_sigma_f, body (optional), h, diameter (optional), diameter_sigma (optional), fullname (optional)","items":{"oneOf":[{"type":"string"},{"type":"number"},{"type":"null"}]},"type":"array"},"key$":"data","type":"array"}},"required":["signature","count"],"x-ref":"#/components/schemas/CloseApproachResponse","index$":0},"examples":{"successWithData":{"summary":"Successful response with 3 records","value":{"signature":{"source":"NASA/JPL SBDB Close Approach Data API","version":"1.5"},"count":3,"fields":["des","orbit_id","jd","cd","dist","dist_min","dist_max","v_rel","v_inf","t_sigma_f","h","diameter","diameter_sigma","fullname"],"data":[["153814","174","2461948.724524223","2028-Jun-26 05:23","0.00166253924938707","0.00166237672775144","0.00166270177137481","10.2426019613426","10.084918538826","< 00:01","18.33","0.932","0.011","153814 (2001 WN5)"],["99942","206","2462240.407091595","2029-Apr-13 21:46","0.000254099098170977","0.000254085852623379","0.000254112343772133","7.42249308586014","5.84135545611464","< 00:01","19.7","0.34","0.04"," 99942 Apophis (2004 MN4)"],["2001 AV43","42","2462452.142037054","2029-Nov-11 15:25","0.00209271674918052","0.00209125158265035","0.00209418316351851","3.99789389003422","3.66561381185116","00:03","24.6",null,null," (2001 AV43)"]]}},"zeroResults":{"summary":"Successful response with no matching data","value":{"signature":{"version":"1.5","source":"NASA/JPL SBDB Close Approach Data API"},"count":0}}}}}},"400":{"description":"Bad Request - Invalid keywords and/or content","content":{"application/json":{"schema":{"type":"object","properties":{"signature":{"type":"object","properties":{"source":{"type":"string"},"version":{"type":"string"}}},"error":{"type":"string","description":"Error message describing the issue"},"message":{"type":"string","description":"Detailed error information"}},"x-ref":"#/components/schemas/ErrorResponse"}}}},"405":{"description":"Method Not Allowed - Incorrect HTTP method used","content":{"application/json":{"schema":{"type":"object","properties":{"signature":{"type":"object","properties":{"source":{"type":"string"},"version":{"type":"string"}}},"error":{"type":"string","description":"Error message describing the issue"},"message":{"type":"string","description":"Detailed error information"}},"x-ref":"#/components/schemas/ErrorResponse"}}}},"500":{"description":"Internal Server Error - Database not available","content":{"application/json":{"schema":{"type":"object","properties":{"signature":{"type":"object","properties":{"source":{"type":"string"},"version":{"type":"string"}}},"error":{"type":"string","description":"Error message describing the issue"},"message":{"type":"string","description":"Detailed error information"}},"x-ref":"#/components/schemas/ErrorResponse"}}}},"503":{"description":"Service Unavailable - Server temporarily overloaded or under maintenance","content":{"application/json":{"schema":{"type":"object","properties":{"signature":{"type":"object","properties":{"source":{"type":"string"},"version":{"type":"string"}}},"error":{"type":"string","description":"Error message describing the issue"},"message":{"type":"string","description":"Detailed error information"}},"x-ref":"#/components/schemas/ErrorResponse"}}}}},"parameters":[{"name":"date-min","in":"query","description":"Exclude data earlier than this date. Format: YYYY-MM-DD or YYYY-MM-DDThh:mm:ss or 'now' for current date","required":false,"schema":{"type":"string","default":"now"},"example":"2018-01-01","index$":0},{"name":"date-max","in":"query","description":"Exclude data later than this date. Format: YYYY-MM-DD or YYYY-MM-DDThh:mm:ss or 'now' or +D for D days after now (e.g., +60). Note: URL-encode the plus sign as %2B","required":false,"schema":{"type":"string","default":"+60"},"example":"2100-01-01","index$":1},{"name":"dist-min","in":"query","description":"Exclude data with approach distance less than this value (default units: au). Example: 0.05 or 10LD","required":false,"schema":{"type":"string"},"example":"0.05","index$":2},{"name":"dist-max","in":"query","description":"Exclude data with approach distance greater than this value (default units: au). Example: 0.2 or 10LD","required":false,"schema":{"type":"string","default":"0.05"},"example":"0.2","index$":3},{"name":"min-dist-min","in":"query","description":"Exclude data with approach minimum-distance less than this value (default units: au)","required":false,"schema":{"type":"string"},"index$":4},{"name":"min-dist-max","in":"query","description":"Exclude data with approach minimum-distance greater than this value (default units: au)","required":false,"schema":{"type":"string"},"index$":5},{"name":"h-min","in":"query","description":"Exclude data from objects with H-values less than this (smaller objects). Example: 22","required":false,"schema":{"type":"number"},"index$":6},{"name":"h-max","in":"query","description":"Exclude data from objects with H-values greater than this (larger objects). Example: 17.75","required":false,"schema":{"type":"number"},"index$":7},{"name":"v-inf-min","in":"query","description":"Exclude data with V-infinity less than this positive value in km/s. Example: 18.5","required":false,"schema":{"type":"number"},"index$":8},{"name":"v-inf-max","in":"query","description":"Exclude data with V-infinity greater than this positive value in km/s. Example: 20","required":false,"schema":{"type":"number"},"index$":9},{"name":"v-rel-min","in":"query","description":"Exclude data with V-relative less than this positive value in km/s. Example: 11.2","required":false,"schema":{"type":"number"},"index$":10},{"name":"v-rel-max","in":"query","description":"Exclude data with V-relative greater than this positive value in km/s. Example: 19","required":false,"schema":{"type":"number"},"index$":11},{"name":"class","in":"query","description":"Limit data to objects with the specified orbit-class. Valid values: IEO, ATE, APO, AMO, MCA, IMB, MBA, OMB, TJN, CEN, TNO, PAA, HYA, HYP, PAR, COM, JFC, HTC, ETc, CTc, JFc","required":false,"schema":{"type":"string","enum":["IEO","ATE","APO","AMO","MCA","IMB","MBA","OMB","TJN","CEN","TNO","PAA","HYA","HYP","PAR","COM","JFC","HTC","ETc","CTc","JFc"]},"example":"ATE","index$":12},{"name":"pha","in":"query","description":"Limit data to Potentially Hazardous Asteroids (PHAs)","required":false,"schema":{"type":"boolean","default":false},"index$":13},{"name":"nea","in":"query","description":"Limit data to Near-Earth Asteroids (NEAs)","required":false,"schema":{"type":"boolean","default":false},"index$":14},{"name":"comet","in":"query","description":"Limit data to comets","required":false,"schema":{"type":"boolean","default":false},"index$":15},{"name":"nea-comet","in":"query","description":"Limit data to NEAs and comets","required":false,"schema":{"type":"boolean","default":false},"index$":16},{"name":"neo","in":"query","description":"Limit data to Near-Earth Objects (NEOs)","required":false,"schema":{"type":"boolean","default":true},"index$":17},{"name":"kind","in":"query","description":"Limit data to objects of specified kind: a=asteroid, an=numbered-asteroids, au=unnumbered-asteroids, c=comets, cn=numbered-comets, cu=unnumbered-comets, n=numbered-objects, u=unnumbered-objects","required":false,"schema":{"type":"string","enum":["a","an","au","c","cn","cu","n","u"]},"index$":18},{"name":"spk","in":"query","description":"Only data for the object matching this SPK-ID. Example: 2000433","required":false,"schema":{"type":"integer"},"example":2000433,"index$":19},{"name":"des","in":"query","description":"Only data for the object matching this designation. Example: 433 or 2015 AB or 141P. Note: Replace spaces with %20 in query string","required":false,"schema":{"type":"string"},"example":"433","index$":20},{"name":"body","in":"query","description":"Limit data to close-approaches to the specified body or use ALL or * for all bodies. Valid values: Merc, Venus, Earth, Mars, Juptr, Satrn, Urnus, Neptn, Pluto, Moon","required":false,"schema":{"type":"string","default":"Earth","enum":["Merc","Venus","Earth","Mars","Juptr","Satrn","Urnus","Neptn","Pluto","Moon","ALL","*"]},"example":"Earth","index$":21},{"name":"sort","in":"query","description":"Sort data on specified field: date, dist, dist-min, v-inf, v-rel, h, or object. Prepend '-' for descending order","required":false,"schema":{"type":"string","default":"date","enum":["date","dist","dist-min","v-inf","v-rel","h","object","-date","-dist","-dist-min","-v-inf","-v-rel","-h","-object"]},"example":"date","index$":22},{"name":"limit","in":"query","description":"Limit data to first N results (integer greater than zero). Also outputs total available matching records","required":false,"schema":{"type":"integer","minimum":1},"index$":23},{"name":"limit-from","in":"query","description":"Limit data to results starting from record N (integer greater than zero). Requires limit parameter","required":false,"schema":{"type":"integer","minimum":1},"index$":24},{"name":"total-only","in":"query","description":"Output only the total number of records matching the filter, ignoring limit and limit-from. No data output","required":false,"schema":{"type":"boolean","default":false},"index$":25},{"name":"diameter","in":"query","description":"Include known diameter and diameter_sigma values in output","required":false,"schema":{"type":"boolean","default":false},"index$":26},{"name":"fullname","in":"query","description":"Include full-format object name/designation in output","required":false,"schema":{"type":"boolean","default":false},"index$":27}],"securitySource":"unspecified"}})
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
  
