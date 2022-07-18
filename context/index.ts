declare global {
  namespace Express {
    interface Request {
      context: Context
    }
  }
}

interface ContextData {
  [key: string]: any
}

export class Context {
  public data: ContextData
  constructor() {
    this.data = {}
  }
}
