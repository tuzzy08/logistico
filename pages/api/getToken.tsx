import { NextApiRequest, NextApiResponse } from 'next'
// import jwt from 'jsonwebtoken'
import Cors from 'cors'
import initMiddleware from '../../utils/api/initMiddleware'
import setTokenAsCookie from '../../utils/api/setTokenAsCookie'
import createToken from '../../utils/api/createToken'

export default async function getToken(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Initialize the cors middleware
  const cors = await initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
      origin: '*',
      // Only allow requests with GET, POST and OPTIONS
      methods: ['GET', 'POST', 'OPTIONS'],
    }),
  )

  // Run cors
  await cors(req, res)

  const { method } = req
  switch (method) {
    case 'POST':
      if (req.body) {
        const payload = {
          displayName: req.body.displayName,
          email: req.body.email,
          emailVerified: req.body.emailVerified,
          photoURL: req.body.photoURL,
        }
        /* JWT secret key */
        const KEY = process.env.JWT_SECRET_KEY
        /* JWT options */
        const options = { expiresIn: 3600 }
        /* Generate token */
        const token = createToken(payload, KEY, options)
        // TODO: Ensure to change cookie secure option to 'true' in production
        // Set cookie policy for session cookie.
        const cookieOptions = {
          maxAge: options.expiresIn,
          httpOnly: true,
          secure: false,
          path: '/',
        }
        setTokenAsCookie(token, res, 'accessToken', cookieOptions)
        res.status(200).json({
          message: 'API call succesful',
          status: 'success',
          token,
        })
      }
      break
    default:
      break
  }
}
