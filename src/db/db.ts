import pg from "pg";
import { config } from "dotenv";
config();

const pool = new pg.Pool({
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT),
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGNAME,
    ssl: {
        rejectUnauthorized: process.env.PGSSLMODE !== "require",
    },
});

export default pool;
