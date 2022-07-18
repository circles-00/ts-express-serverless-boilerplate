import * as express from 'express'
const router = express.Router()
import { AuthController } from '../controllers/auth.controller'

// @route POST /path/to/route
// @desc Users login
// @access Public
router.post('/login', (req, res, next) =>
  new AuthController(req, res, next).login(),
)

export default router
