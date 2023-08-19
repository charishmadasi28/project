import { MongoClient } from "mongodb";
let db; 
async function connectToDB(cb){
    const url = "mongodb+srv://dasicharishma:cherry2406@cluster28.r1pab34.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("virginia");
    cb();
}
export { connectToDB, db };