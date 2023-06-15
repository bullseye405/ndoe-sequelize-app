module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "samir123",
  DB: "rento",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};