const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "localhost",
    user: "root",
    password: "Password",
    database: "todos",
  },
  listPerPage: 10,
};
module.exports = config;