import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || '',
};

// Changed function signature to accept direct parameters
export async function executeQuery(query, values = []) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [results] = await connection.execute(query, values);
    await connection.end();
    return { rows: results }; // Wrap results in an object with rows property
  } catch (error) {
    console.error('Database error:', error);
    throw error;
  }
}