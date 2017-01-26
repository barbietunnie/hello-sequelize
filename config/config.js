module.exports = {
  "development": {
    "url": "sqlite://demo.sqlite",
    "dialect": "sqlite"
  },
  "test": {
    "url": process.env.DATABASE_URL || "sqlite://demo-test.sqlite",
    "dialect": "sqlite"
  },
  "staging": {
    "url": process.env.DATABASE_URL,
    "dialect": "mysql"
  }, 
  production: {
    "url": process.env.DATABASE_URL,
    "dialect": "mysql"
  }
}
