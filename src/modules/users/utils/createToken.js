import jwt from 'jsonwebtoken';

import config from "../../../config/config";

export const createToken = args =>{
    
    const token = jwt.sign({id:args._id},config.JWT_SECRET);
    console.log(token);
    return token;
}

    