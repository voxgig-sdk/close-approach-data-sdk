
import { Context } from './Context'


class CloseApproachDataError extends Error {

  isCloseApproachDataError = true

  sdk = 'CloseApproachData'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  CloseApproachDataError
}

