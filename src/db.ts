import { Client } from 'pg';
import { DgClientConfig } from './types';

/* eslint-disable */
require('dotenv').config();

const dbConfig: DgClientConfig = {
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
};

const pgClient = new Client(dbConfig);

const init = async () => {
  pgClient.connect((error) => {
    if (error) {
      console.log(`connection error: ${error.message}`);
    } else {
      console.log(`connected to database successfully`);
    }
  });
};

const query = async (query: string): Promise<any> => {
  return pgClient
    .query(query)
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log('db: failed to execute query: ', error);
      throw error;
    });
};

init();

export { query };
