import dotenv from "dotenv";

dotenv.config();

const key = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  apiurl: process.env.API_URL,
  jwt: {
    secret: process.env.JWT_SECRET,
    tokenLife: 36000
  },
  database: {url: process.env.MONGODB_URL},
  swaggerUrl: process.env.SWAGGER_URL,
  urlRedirect: process.env.URL_REDIRECT,
  mikrotik: {
    user: process.env.USER_MIKROTIK,
    password: process.env.PASSWORD_MIKROTIK,
    host: process.env.HOST_MIKROTIK,
    port: process.env.PORT_MIKROTIK
  }
};

export default key;