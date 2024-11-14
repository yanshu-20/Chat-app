import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie= (userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'15d'
    })
    res.cookie("jwt",token,{
        maxAge:15*24*60*60*1000, // the data should be only accessable in http order..
        httpOnly:true, //prevet xss acctack cross-site scripting attackss...
        sameSite:"strict" ,// CSRF attacks cross-site request forgery attacks
        secure:process.env.NODE_ENV!=="development"
    });

};
export default generateTokenAndSetCookie;