package core

type CloseApproachDataError struct {
	IsCloseApproachDataError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCloseApproachDataError(code string, msg string, ctx *Context) *CloseApproachDataError {
	return &CloseApproachDataError{
		IsCloseApproachDataError: true,
		Sdk:              "CloseApproachData",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CloseApproachDataError) Error() string {
	return e.Msg
}
