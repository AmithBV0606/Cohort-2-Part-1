// // write a function to create a users table in your database.
import { Client } from "pg";

export const client = new Client({
    // connectionString: "";
});

// t2rjwZ3uSdRI


async function createUserTable() {
    await client.connect(); // It takes some time for "pg" library to connect to the postgres database
    const result = await client.query(`
        CREATE TABLE users (
            id   SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );    
    `)
    console.log(result);
}

createUserTable();