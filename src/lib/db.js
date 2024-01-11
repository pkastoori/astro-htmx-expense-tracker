import postgres from "postgres";

const sql = postgres({
  host: import.meta.env.DATABASE_HOST,
  port: 5432,
  database: import.meta.env.DATABASE_NAME,
  username: import.meta.env.DATABASE_USER,
  password: import.meta.env.DATABASE_PASSWORD,
  ssl: "require",
});

export default sql;

import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
