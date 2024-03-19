import { MONGO_URL } from '$env/static/private';
import { Db, MongoClient } from 'mongodb';

const client = new MongoClient(MONGO_URL);


// connect to the database
export async function connect(): Promise<Db> {
	try {
        const database:Db =  client.db('profiles-db');
        return database;
    } catch (error) {
        console.log("ERROR", error);
        throw error;
    }
      
}