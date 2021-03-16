import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import Cors from 'cors'
import initMiddleware from '../../utils/initMiddleware'
import setTokenAsCookie from '../../utils/setTokenAsCookie'

export default async function getToken(req: NextApiRequest, res: NextApiResponse) {

  // Initialize the cors middleware
const cors = await initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    origin: '*',
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

  // Run cors
  await cors(req, res)

  const { method } = req
  switch(method) {
    case 'POST':
      if(req.body) {
        const payload = {
          displayName: req.body.displayName,
          email: req.body.email,
          emailVerified: req.body.emailVerified,
          photoURL: req.body.photoURL,
        }
        /* JWT secret key */
        const KEY = process.env.JWT_SECRET_KEY
        const token = jwt.sign(
          payload,
          KEY,
          {
            expiresIn: 3600,
          },)
        // set cookie expiration
        const expiresIn = 3600
        // TODO: Ensure to change cookie secure option to 'true' in production
        // Set cookie policy for session cookie.
        const cookieOptions = { maxAge: expiresIn, httpOnly: true, secure: false, path: '/'}
        setTokenAsCookie(token, res, 'access_token', cookieOptions)
        res.status(200).json({
          message: 'API call succesful',
          status: 'success',
          token: token,
        })
      }
  }
}