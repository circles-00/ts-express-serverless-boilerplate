import * as app from './app'
//tslint:disable
import * as serverless from 'serverless-http'
// import logger from "@microtica/logger";

const handler = serverless(app)

module.exports.handler = async (event: any, context: any) => {
  // Check if user has supplied jwt token, if yes, validate user and send him as validated,
  // Otherwise continue with the express app

  /* Example
   * If(event.headers['Authorization'] {
   * // decode token
   * // validate user (using mock data for now)
   * // if valid, return {
        "isAuthorized": true
    } else return false etc...
   *
   * } else ...
   * */

  return await handler(event, context)
}
