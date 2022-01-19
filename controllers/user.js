const connectDB = require('../config/db')

exports.userForm = async (req, res) => {
    const query = "SELECT * FROM MYTAB";
    const params = [];
    const result=await connectDB(query, params)
    res.status(200).json(result)
};