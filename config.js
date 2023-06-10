const config = {
    db: {
        /* don't expose password or any sensitive info, done only for demo */
        host: "localhost",
        user: "root",
        password: "P",
        database: "books",
        multipleStatements: true,
    },
};
module.exports = config;