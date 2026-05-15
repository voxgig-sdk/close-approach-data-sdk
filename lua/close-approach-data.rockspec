package = "voxgig-sdk-close-approach-data"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/close-approach-data-sdk.git"
}
description = {
  summary = "CloseApproachData SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["close-approach-data_sdk"] = "close-approach-data_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
