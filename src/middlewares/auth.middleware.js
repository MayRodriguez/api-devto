const jwt = require("../lib/jwt");
const createError = require("http-errors");

function auth(req, res, next){
    try {
        const  {authorization} = req.headers;
        if(!authorization){
            throw new createError(401, "token required")
        }
        const token = authorization.replace("Bearer", '');
        const payload = jwt.verify(token)
        if(!payload) {
            throw new createError(401, "couldn't verify token");
        }
        next();

    } catch (err) {
        res.status(401)
        res.json({
            message: "unauthorized",
            error: err.message
        })
    }

}

module.exports = auth