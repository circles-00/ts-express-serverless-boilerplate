export interface IAuthService {
  login: (user: User) => void
}

export interface User {
  firstName: string
  lastName: string
  email: string
  password: string
}
