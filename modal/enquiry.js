require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.SUPABASE_DB_URL,
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS enquiries (
    id serial PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    project_type TEXT NOT NULL,
    property_size TEXT NOT NULL,
    location TEXT NOT NULL,
    budget TEXT NOT NULL,
    timeline TEXT NOT NULL,
    requirements TEXT,
    created_at TIMESTAMP DEFAULT NOW()
  );
`;

async function init() {
  try {
    await client.connect();
    await client.query(createTableQuery);
    console.log('✅ Table "enquiries" created.');
  } catch (error) {
    console.error('❌ Failed to create table:', error);
  } finally {
    await client.end();
  }
}

init();
