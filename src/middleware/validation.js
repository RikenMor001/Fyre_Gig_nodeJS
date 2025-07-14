
const validationSchema = (schema) => {
    try {
    return (req, res, next) => {
        if (schema.type === "body"){
            req.body = schema.schema.parse(req.body);
        } else if (schema.type === "params"){
            req.params = schema.schema.parse(req.params);
        } else if (schema.type === "querry"){
            req.querry = schema.schema.parse(req.querry);
        }
        next();
        res.status(200).json({
            message: "Validation successful"
        })
    }
    } catch(error){
        res.status(400).json({
            success: false,
            data: error.data,
            message: "Error in validating the credentials"
        })
        next(error);
    }
}

module.exports = { validationSchema };

