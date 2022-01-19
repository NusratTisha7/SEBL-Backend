const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OBJECT;
let connection = undefined;

const connectDB = async (query, params) => {
    if (connection === undefined) {
        connection = await oracledb.getConnection({
            user: process.env.ORACLEDB_USER,
            password: process.env.ORACLEDB_PASSWORD,
            connectString: process.env.ORACLEDB_CONNECTSTRING
        })
    }
    try {
        let result = await connection.execute(query, params);
        console.log(result)
        return result.rows;
    } catch (error) {
        console.log(error);
        return {
            success: false,
            error
        }
    }
}

module.exports = connectDB;


