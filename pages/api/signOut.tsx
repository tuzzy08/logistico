import { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie'


export default async function signOut(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'GET') {
    res.setHeader('Set-Cookie', serialize('access_token', 'deleted', { path: '/', maxAge: -1}))
    res.status(200).json({
      message: 'User Logged out',
      status: 'successful,',
      data: null
    })
  }
}