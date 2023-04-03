import { getDB } from '$db/mongo';
const db = getDB();

export async function getCollection(collection_name:string, skip:number, limit:number) {
    const data = await db.collection(collection_name).find({}).project({_id:0}).skip(skip).limit(limit).toArray();
    return data;
}