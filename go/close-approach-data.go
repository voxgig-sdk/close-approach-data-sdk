package voxgigcloseapproachdatasdk

import (
	"github.com/voxgig-sdk/close-approach-data-sdk/core"
	"github.com/voxgig-sdk/close-approach-data-sdk/entity"
	"github.com/voxgig-sdk/close-approach-data-sdk/feature"
	_ "github.com/voxgig-sdk/close-approach-data-sdk/utility"
)

// Type aliases preserve external API.
type CloseApproachDataSDK = core.CloseApproachDataSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CloseApproachDataEntity = core.CloseApproachDataEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CloseApproachDataError = core.CloseApproachDataError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCadapiEntityFunc = func(client *core.CloseApproachDataSDK, entopts map[string]any) core.CloseApproachDataEntity {
		return entity.NewCadapiEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCloseApproachDataSDK = core.NewCloseApproachDataSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
