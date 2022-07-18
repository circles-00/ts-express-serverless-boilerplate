import { IAuthService, User } from '../interfaces/types'

export class AuthService implements IAuthService {
  constructor() {}

  async login(user: User) {
    console.log('This is a login method inside the auth service')
  }
}
