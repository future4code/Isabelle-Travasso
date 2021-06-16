import knex from "knex";
import {config} from 'dotenv'
import Knex from 'knex';

config()

export class BaseDatabase {

   protected static connection: Knex = knex({
        client: "mysql",
        connection: {
           host: process.env.DB_HOST,
           user: process.env.DB_USER,
           password: process.env.DB_PASSWORD,
           port: 3306,
           database: process.env.DB_NAME,
        }
     })
}