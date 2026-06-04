# CloseApproachData SDK

Query close-approach data for asteroids and comets from NASA JPL's Small-Body Database

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Close Approach Data API

The Close Approach Data (CAD) API is part of NASA Jet Propulsion Laboratory's [Solar System Dynamics / SSD-CNEOS API suite](https://ssd-api.jpl.nasa.gov/), exposing the same close-approach catalogue that powers JPL's Small-Body Database (SBDB) lookup tools.

What you get from the API:

- Past and predicted close approaches of asteroids and comets to Earth (default) or any of Mercury through Neptune, the Moon, or Pluto.
- Per-approach records including designation (`des`), orbit solution id (`orbit_id`), Julian date and calendar date of closest approach (`jd`, `cd`), nominal/minimum/maximum approach distance (`dist`, `dist_min`, `dist_max`), relative and v-infinity velocities (`v_rel`, `v_inf`), time uncertainty (`t_sigma_f`), absolute magnitude (`h`), and optional diameter and full object name.
- Filtering by date range, distance, absolute magnitude, v-infinity, orbit class (e.g. `ATE`, `APO`, `AMO`), and boolean flags for NEO / PHA / NEA / comet subsets, plus selection by `des` or SPK-ID.
- Sorting and pagination via `sort`, `limit`, and `limit-from`.

The endpoint is `GET https://ssd-api.jpl.nasa.gov/cad.api` and returns JSON. Distances are reported in astronomical units (AU) or lunar distances (LD), velocities in km/s, diameters in km, and magnitudes in mag. No API key or authentication is required, but CORS is not enabled, so browser clients must proxy requests.

## Try it

**TypeScript**
```bash
npm install close-approach-data
```

**Python**
```bash
pip install close-approach-data-sdk
```

**PHP**
```bash
composer require voxgig/close-approach-data-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/close-approach-data-sdk/go
```

**Ruby**
```bash
gem install close-approach-data-sdk
```

**Lua**
```bash
luarocks install close-approach-data-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { CloseApproachDataSDK } from 'close-approach-data'

const client = new CloseApproachDataSDK({})

// List all cadapis
const cadapis = await client.Cadapi().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o close-approach-data-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "close-approach-data": {
      "command": "/abs/path/to/close-approach-data-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Cadapi** | Close-approach records for asteroids and comets passing near Earth or another major body, served from `GET /cad.api` with date, distance, magnitude, velocity and object-class filters. | `/cad.api` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from closeapproachdata_sdk import CloseApproachDataSDK

client = CloseApproachDataSDK({})

# List all cadapis
cadapis, err = client.Cadapi(None).list(None, None)
```

### PHP

```php
<?php
require_once 'closeapproachdata_sdk.php';

$client = new CloseApproachDataSDK([]);

// List all cadapis
[$cadapis, $err] = $client->Cadapi(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/close-approach-data-sdk/go"

client := sdk.NewCloseApproachDataSDK(map[string]any{})

// List all cadapis
cadapis, err := client.Cadapi(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "CloseApproachData_sdk"

client = CloseApproachDataSDK.new({})

# List all cadapis
cadapis, err = client.Cadapi(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("close-approach-data_sdk")

local client = sdk.new({})

-- List all cadapis
local cadapis, err = client:Cadapi(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = CloseApproachDataSDK.test()
const result = await client.Cadapi().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = CloseApproachDataSDK.test(None, None)
result, err = client.Cadapi(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = CloseApproachDataSDK::test(null, null);
[$result, $err] = $client->Cadapi(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Cadapi(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = CloseApproachDataSDK.test(nil, nil)
result, err = client.Cadapi(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Cadapi(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Close Approach Data API

- Upstream: [https://ssd-api.jpl.nasa.gov/doc/cad.html](https://ssd-api.jpl.nasa.gov/doc/cad.html)

- Data and service provided by [NASA JPL Solar System Dynamics](https://ssd.jpl.nasa.gov/) / CNEOS.
- Attribution as the "NASA/JPL SBDB Close Approach Data API" is requested when redistributing results.
- Fair-use policy applies: serial (non-parallel) requests, no embedding the live API in third-party websites, and best-effort availability.
- Response formats can change without notice; check the `signature` object in each payload for the API version.

---

Generated from the Close Approach Data API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
