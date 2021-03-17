import { serialize, CookieSerializeOptions } from 'cookie'
import { NextApiResponse } from 'next'

export default function setTokenAsCookie(token: string = '', res: NextApiResponse, name: string, options: CookieSerializeOptions = {}) {
  const stringValue = typeof token === 'object' ? JSON.stringify(token) : String(token)
  res.setHeader('Set-Cookie', serialize(name, stringValue, options))
}