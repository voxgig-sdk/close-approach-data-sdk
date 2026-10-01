# CloseApproachData SDK configuration

module CloseApproachDataConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "CloseApproachData",
        "slug" => "close-approach-data",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://ssd-api.jpl.nasa.gov",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "cadapi" => {},
        },
      },
      "entity" => {
        "cadapi" => {
          "fields" => [
            {
              "name" => "count",
              "title" => "Count",
              "type" => "`$NUMBER`",
              "req" => true,
              "short" => "Number of records returned",
            },
            {
              "name" => "data",
              "title" => "Data",
              "type" => "`$ARRAY`",
              "short" => "Array of close-approach records",
            },
            {
              "name" => "fields",
              "title" => "Fields",
              "type" => "`$ARRAY`",
              "short" => "Field names corresponding to data array elements",
            },
            {
              "name" => "signature",
              "title" => "Signature",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "total",
              "title" => "Total",
              "type" => "`$NUMBER`",
              "short" => "Total number of matching records (when limit is used)",
            },
          ],
          "name" => "cadapi",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/cad.api",
                  "segments" => [
                    {
                      "lit" => "cad.api",
                    },
                  ],
                  "parts" => [
                    "cad.api",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "body",
                        "orig" => "body",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "Earth",
                      },
                      {
                        "name" => "class",
                        "orig" => "class",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "ATE",
                      },
                      {
                        "name" => "comet",
                        "orig" => "comet",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                        "example" => false,
                      },
                      {
                        "name" => "date_max",
                        "orig" => "date-max",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "2100-01-01",
                      },
                      {
                        "name" => "date_min",
                        "orig" => "date-min",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "2018-01-01",
                      },
                      {
                        "name" => "des",
                        "orig" => "des",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "433",
                      },
                      {
                        "name" => "diameter",
                        "orig" => "diameter",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                        "example" => false,
                      },
                      {
                        "name" => "dist_max",
                        "orig" => "dist-max",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "0.2",
                      },
                      {
                        "name" => "dist_min",
                        "orig" => "dist-min",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "0.05",
                      },
                      {
                        "name" => "fullname",
                        "orig" => "fullname",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                        "example" => false,
                      },
                      {
                        "name" => "h_max",
                        "orig" => "h-max",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "h_min",
                        "orig" => "h-min",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "kind",
                        "orig" => "kind",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "limit_from",
                        "orig" => "limit-from",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "min_dist_max",
                        "orig" => "min-dist-max",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "min_dist_min",
                        "orig" => "min-dist-min",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "nea",
                        "orig" => "nea",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                        "example" => false,
                      },
                      {
                        "name" => "nea_comet",
                        "orig" => "nea-comet",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                        "example" => false,
                      },
                      {
                        "name" => "neo",
                        "orig" => "neo",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                        "example" => true,
                      },
                      {
                        "name" => "pha",
                        "orig" => "pha",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                        "example" => false,
                      },
                      {
                        "name" => "sort",
                        "orig" => "sort",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "date",
                      },
                      {
                        "name" => "spk",
                        "orig" => "spk",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 2000433,
                      },
                      {
                        "name" => "total_only",
                        "orig" => "total-only",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                        "example" => false,
                      },
                      {
                        "name" => "v_inf_max",
                        "orig" => "v-inf-max",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "v_inf_min",
                        "orig" => "v-inf-min",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "v_rel_max",
                        "orig" => "v-rel-max",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "v_rel_min",
                        "orig" => "v-rel-min",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
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
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    CloseApproachDataFeatures.make_feature(name)
  end
end
