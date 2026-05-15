package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCadapiEntityFunc func(client *CloseApproachDataSDK, entopts map[string]any) CloseApproachDataEntity

