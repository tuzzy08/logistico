import jwt from 'jsonwebtoken'

export default function createToken(payload: object | any, key: string, options: object = {}) {
  return jwt.sign( payload,  key,  options,)
}