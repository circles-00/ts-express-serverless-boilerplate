import { NextFunction, Request, Response } from 'express'

export class BaseController {
  constructor(
    public _req: Request,
    public _res: Response,
    public _next: NextFunction,
  ) {}

  jsonResponse(code: number, message: any) {
    return this._res.status(code).send(message)
  }
  ok(dto: any) {
    if (dto) {
      return this._res.status(200).json(dto)
    } else {
      return this._res.sendStatus(200)
    }
  }

  sendStatus(code: number) {
    return this._res.sendStatus(code)
  }

  clientError(message: any) {
    return this.jsonResponse(400, message ? message : 'Client error')
  }

  unauthorized(message: any) {
    return this.jsonResponse(401, message ? message : 'Unauthorized')
  }

  notFound(message: any) {
    return this.jsonResponse(404, message ? message : 'Not found')
  }

  fail(error: any) {
    return this._res.status(500).json({
      message: error.toString(),
    })
  }
}
