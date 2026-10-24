# CloseApproachData SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "CloseApproachData",
            "slug": "close-approach-data",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "now": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://ssd-api.jpl.nasa.gov",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "cadapi": {},
            },
        },
        "entity": {
      "cadapi": {
        "fields": [
          {
            "name": "count",
            "title": "Count",
            "type": "`$NUMBER`",
            "req": True,
            "short": "Number of records returned",
          },
          {
            "name": "data",
            "title": "Data",
            "type": "`$ARRAY`",
            "short": "Array of close-approach records",
          },
          {
            "name": "fields",
            "title": "Fields",
            "type": "`$ARRAY`",
            "short": "Field names corresponding to data array elements",
          },
          {
            "name": "signature",
            "title": "Signature",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "total",
            "title": "Total",
            "type": "`$NUMBER`",
            "short": "Total number of matching records (when limit is used)",
          },
        ],
        "name": "cadapi",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/cad.api",
                "segments": [
                  {
                    "lit": "cad.api",
                  },
                ],
                "parts": [
                  "cad.api",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "body",
                      "orig": "body",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "Earth",
                    },
                    {
                      "name": "class",
                      "orig": "class",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "ATE",
                    },
                    {
                      "name": "comet",
                      "orig": "comet",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": False,
                    },
                    {
                      "name": "date_max",
                      "orig": "date-max",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "2100-01-01",
                    },
                    {
                      "name": "date_min",
                      "orig": "date-min",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "2018-01-01",
                    },
                    {
                      "name": "des",
                      "orig": "des",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "433",
                    },
                    {
                      "name": "diameter",
                      "orig": "diameter",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": False,
                    },
                    {
                      "name": "dist_max",
                      "orig": "dist-max",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "0.2",
                    },
                    {
                      "name": "dist_min",
                      "orig": "dist-min",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "0.05",
                    },
                    {
                      "name": "fullname",
                      "orig": "fullname",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": False,
                    },
                    {
                      "name": "h_max",
                      "orig": "h-max",
                      "type": "`$NUMBER`",
                      "kind": "query",
                    },
                    {
                      "name": "h_min",
                      "orig": "h-min",
                      "type": "`$NUMBER`",
                      "kind": "query",
                    },
                    {
                      "name": "kind",
                      "orig": "kind",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "limit_from",
                      "orig": "limit-from",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "min_dist_max",
                      "orig": "min-dist-max",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "min_dist_min",
                      "orig": "min-dist-min",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "nea",
                      "orig": "nea",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": False,
                    },
                    {
                      "name": "nea_comet",
                      "orig": "nea-comet",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": False,
                    },
                    {
                      "name": "neo",
                      "orig": "neo",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": True,
                    },
                    {
                      "name": "pha",
                      "orig": "pha",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": False,
                    },
                    {
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "date",
                    },
                    {
                      "name": "spk",
                      "orig": "spk",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 2000433,
                    },
                    {
                      "name": "total_only",
                      "orig": "total-only",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": False,
                    },
                    {
                      "name": "v_inf_max",
                      "orig": "v-inf-max",
                      "type": "`$NUMBER`",
                      "kind": "query",
                    },
                    {
                      "name": "v_inf_min",
                      "orig": "v-inf-min",
                      "type": "`$NUMBER`",
                      "kind": "query",
                    },
                    {
                      "name": "v_rel_max",
                      "orig": "v-rel-max",
                      "type": "`$NUMBER`",
                      "kind": "query",
                    },
                    {
                      "name": "v_rel_min",
                      "orig": "v-rel-min",
                      "type": "`$NUMBER`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
