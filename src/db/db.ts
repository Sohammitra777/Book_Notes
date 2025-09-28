import pg from "pg"; 

const pool = new pg.Pool({
  host: "localhost",
  port: 7000,
  user: "postgres",
  password: "learningPostgres123",
  database: "bookNote",
});

export default pool; 