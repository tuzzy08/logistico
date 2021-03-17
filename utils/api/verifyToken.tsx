import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET_KEY

export default function verifyToken(token: string = '') {
  try {
    return jwt.verify(token, SECRET_KEY)
  } catch (error) {
    console.log(error)
    return null
  }
}