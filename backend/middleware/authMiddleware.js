// import jwt from "jsonwebtoken";
// import "dotenv/config.js"

// const fetchUser = async (req, res, next) => {
//     const token = req.header('auth-token');

//     if (!token) {
//         return res.status(401).json({ msg: 'No token, authorization denied' });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded.user;
//         next();
//     } catch (err) {
//         res.status(401).json({ msg: 'Token is not valid' });
//     }
// };

// export default fetchUser;


// import "dotenv/config";
// import jwt from "jsonwebtoken";

// const fetchUser = (req,res,next)=>{
//     const token = req.header('auth-token');

//     if(!token){
//         res.status(401).sned({error : "Please authenticate using a valid token"});
//     }

//     try {
//         const { _id } = jwt.verify(token , process.env.JWT_SECRET);
//         req.userId = _id;
//         // console.log("fetchuser :" , userId);

//         next();
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({error : "Internal Server Error"})
//     }
    

// }

// export default fetchUser;

import "dotenv/config";
import jwt from "jsonwebtoken";

const fetchUser = (req, res, next) => {
    // Retrieve the token from the 'auth-token' header
    const token = req.header('auth-token');

    // If no token is found, send a 401 Unauthorized response
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }

    try {
        // Verify the token using the JWT secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Set the userId from the decoded token in the request object
        req.userId = decoded.user.id;

        // Continue to the next middleware or route handler
        next();
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Internal Server Error" });
    }
}

export default fetchUser;
