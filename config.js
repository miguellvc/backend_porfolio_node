const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";
const DATABASE = process.env.DATABASE || "porfolio" ;
const USER = process.env.USER || "root";
const PASSWORD = process.env.PASSWORD || "";
const JWT_SECRET = process.env.JWT_SECRET || "flkajdskfj834732@??¡pp8374"

module.exports = {
    PORT,
    HOST,
    DATABASE,
    USER,
    PASSWORD,
    JWT_SECRET
}