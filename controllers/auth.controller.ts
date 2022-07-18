import { BaseController } from './base.controller'
import { NextFunction, Request, Response } from 'express'
import { AuthService } from '../services/auth.service'
import { IAuthService } from '../interfaces/types'

interface IAuthController {
  login: () => void
}

export class AuthController extends BaseController implements IAuthController {
  private readonly authService: IAuthService
  constructor(req: Request, res: Response, next: NextFunction) {
    super(req, res, next)
    this.authService = new AuthService()
  }

  async login() {
    const { firstName, lastName, email, password } = this._req.body
    await this.authService.login({ firstName, lastName, email, password })
    this._res.sendStatus(200)
  }
}
