import { UnauthenticatedError } from "../errors/index.js"
import jwt from 'jsonwebtoken'

const auth = async (req,res,next) => {
    const token = req.cookies.token;
  if (!token) {
    throw new UnAuthenticatedError('Authentication Invalid');
  }
    const authHeader = req.headers.authorization
    
    if (!authHeader || !authHeader.startsWith('Bearer')){
        throw new UnauthenticatedError('Authentication Invalid')
    }
    

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        
        req.user = {userId: payload.userID }
        next() 
    } catch (error) {
        throw new UnauthenticatedError('Authentication Invalid')
    }
    
    
}

export default auth