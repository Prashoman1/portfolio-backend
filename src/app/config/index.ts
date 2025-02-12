import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(),'.env') })

export default{
    port: process.env.PORT || 3000,
    db_url: process.env.DB_HOST,
    salts_rounds: process.env.BYCRYPT_SALT || 10,
    jwt_token_secret: process.env.JWT_SECRET,
    jwt_token_expire: process.env.JWT_EXPIRE || '1d'
}