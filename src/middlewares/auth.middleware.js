const jwt = require("../lib/jwt");
const createError = require("http-errors");

function auth(req, res, next){
    try {
        console.log('auth', authorization)
        const {authorization} = req.headers;
        // const {authorization} = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWNiNWY1N2UwMDdkNzJkODUwODZjYSIsImlhdCI6MTY5MzI4MDg4MSwiZXhwIjoxNjkzNDUzNjgxfQ.HemK3d-IVBdg_EiAMwERK2VSnCBDVmQjBIBdkV8SaSs"
        if(!authorization){
            throw new createError(401, "token required")
        }
        const token = authorization.replace("Bearer ", '');
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